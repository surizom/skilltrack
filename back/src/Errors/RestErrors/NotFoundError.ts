import { RestError } from "./restErrors";

export enum NotFoundErrorMessages {
  UserNotFound,
}

export class NotFoundError extends RestError {
  constructor(
    message: NotFoundErrorMessages,
    backlogMessage?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any
  ) {
    super(404, message, backlogMessage, data);
  }
}
