// [API]SERVER
const BASE_URL = 'https://bootcamp-api.codeit.kr'

// [API]AUTH
const SIGNIN_URL = '/api/sign-in'
const SIGNUP_URL = '/api/sign-up'
const REFRESH_TOKEN_URL = '/api/refresh-token'

// [API]USER
const CHECK_EMAIL_URL = '/api/check-email'

// [KEY]
const ACCESS_TOKEN = 'accessToken'
const REFRESH_TOKEN = 'refreshToken'
const AUTHORIZATION = 'Authorization'

// [HTTP]상태 코드
const STATUS_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT_EMAIL: 409,
  SERVER_ERROR: 500,
  SUCCESS: 200,
}

export {
  BASE_URL,
  SIGNIN_URL,
  SIGNUP_URL,
  REFRESH_TOKEN_URL,
  CHECK_EMAIL_URL,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  AUTHORIZATION,
  STATUS_CODE,
}
