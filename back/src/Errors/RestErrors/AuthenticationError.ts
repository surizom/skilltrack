import { RestError } from "./restErrors";

export enum AuthenticationErrorMessages {
  ErrorAtTokenCreation,
  InvalidCredentials,
  InvalidPassword,
  MissingRefreshToken,
  UserNotFound,
}

export class AuthenticationError extends RestError {
  constructor(message: AuthenticationErrorMessages, data?: string) {
    super(401, message, data);
  }
}
