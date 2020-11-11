import { RestError } from "./restErrors";

export enum UnprocessableErrorMessages {
  UserInvalid,
  WeakPassword,
  MissingEmailInGoogleIdToken,
  EmailNotVerified,
}

export class UnprocessableError extends RestError {
  constructor(message: UnprocessableErrorMessages) {
    super(422, message);
  }
}
