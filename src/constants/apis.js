// [SERVER]
const BASE_URL = 'https://bootcamp-api.codeit.kr'

// [AUTH]
const SIGNIN_URL = '/api/sign-in'
const SIGNUP_URL = '/api/sign-up'

// [USER]
const CHECK_EMAIL_URL = '/api/check-email'

// [HTTP]상태 코드
const ERROR_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT_EMAIL: 409,
  SERVER_ERROR: 500,
  SUCCESS: 200,
}

export { BASE_URL, SIGNIN_URL, SIGNUP_URL, CHECK_EMAIL_URL, ERROR_CODE }
