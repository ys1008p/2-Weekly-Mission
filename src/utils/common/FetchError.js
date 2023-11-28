const ERROR_MESSAGE = {
  UNAUTHORIZED_ERROR: "인증되지 않은 사용자입니다.",
  FORBIDDEN_ERROR: "접근 권한이 없는 사용자입니다.",
};

export class FetchError extends Error {
  /**
   * @param {Response} response
   */
  constructor(message) {
    super(message);
    this.name = "Fetch error";
  }
}

export class UnauthorizedError extends FetchError {
  constructor() {
    super(ERROR_MESSAGE.UNAUTHORIZED_ERROR);
    this.name = "Unauthorized user";
  }
}
