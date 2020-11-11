import { RestError } from "./restErrors";

export enum ForbiddenErrorMessages {
  ForbiddenEmail,
  UserExist,
}

export class ForbiddenError extends RestError {
  constructor(message: ForbiddenErrorMessages) {
    super(403, message);
  }
}
