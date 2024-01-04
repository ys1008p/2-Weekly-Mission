const ERROR_MESSAGE = {
	UNAUTHORIZED_ERROR: "인증되지 않은 사용자입니다.",
	FORBIDDEN_ERROR: "접근 권한이 없는 사용자입니다.",
	API_NOT_FOUND_ERROR: "해당 API를 찾을 수 없습니다.",
};

export class FetchError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "Fetch error";
	}
}

export class UnAuthorizedError extends FetchError {
	constructor() {
		super(ERROR_MESSAGE.UNAUTHORIZED_ERROR);
		this.name = "Unauthorized user";
	}
}

export class APINotFoundError extends FetchError {
	constructor() {
		super(ERROR_MESSAGE.API_NOT_FOUND_ERROR);
		this.name = "API Not found";
	}
}
