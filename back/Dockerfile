FROM node:12.18.0-alpine3.11 as back-install
RUN apk update && apk add bash diffutils
WORKDIR /app-build
COPY package.json ./
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . ./


FROM back-install as fixtures
ARG commit_sha
ENV BUILD_SHA=$commit_sha


FROM back-install as back-build
RUN npm run build && npm prune --production


FROM node:12.18.0-alpine3.11
ARG commit_sha
ARG app_version
ENV BUILD_SHA=$commit_sha
ENV BUILD_TAG=$app_version

WORKDIR /app
COPY --from=back-build /app-build/build/ ./build/
COPY --from=back-build /app-build/node_modules/ ./node_modules/
COPY --from=back-build /app-build/package.json ./

COPY --from=back-build /app-build/src/static/ ./build/static/

# Override ormconfig with the production-ready one
COPY --from=back-build /app-build/ormconfig.base.js ./
COPY --from=back-build /app-build/ormconfig.prod.js ./ormconfig.js

ENV NODE_ENV=production

EXPOSE 4000
CMD ["node", "build/"]
