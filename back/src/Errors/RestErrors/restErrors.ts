import { AuthenticationErrorMessages } from "./AuthenticationError";
import { ForbiddenErrorMessages } from "./ForbiddenError";
import { NotFoundErrorMessages } from "./NotFoundError";
import { UnprocessableErrorMessages } from "./UnprocessableError";

export class RestError extends Error {
  public response: {
    status: number;
    message: string;
    data?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    backlogMessage?: any;
  };

  constructor(
    status: number,
    message:
      | UnprocessableErrorMessages
      | ForbiddenErrorMessages
      | AuthenticationErrorMessages
      | NotFoundErrorMessages,
    data?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    backlogMessage?: any
  ) {
    super();
    this.response = {
      status: status,
      message: message.toString(),
      data,
      backlogMessage,
    };
  }
}
