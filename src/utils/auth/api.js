import {
  SIGNIN_URL,
  SIGNUP_URL,
  CHECK_EMAIL_URL,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  STATUS_CODE,
} from '../../constants/apis.js'

import { FOLDER_PATH } from '../../constants/auth.js'

import { redirectToPage } from './common.js'

import { instance } from './axiosInstance.js'

import {
  handleSigninError,
  handleConflictEmailError,
  handleAuthenticationError,
} from './errorMessage.js'

// [SIGNIN] POST 요청, /folder 이동
const handleSignin = async (email = '', password = '') => {
  try {
    const {
      data: {
        data: { accessToken, refreshToken },
      },
    } = await instance.post(SIGNIN_URL, { email, password })

    localStorage.setItem(ACCESS_TOKEN, accessToken)
    localStorage.setItem(REFRESH_TOKEN, refreshToken)

    redirectToPage(FOLDER_PATH)
  } catch (e) {
    handleAuthenticationError(e)
    handleSigninError()
  }
}

// [CHECK EMAIL] POST 요청, 중복 확인, 중복 에러
const emailConflictCheck = async (email = '') => {
  try {
    const res = await instance.post(CHECK_EMAIL_URL, { email })
    const { CONFLICT_EMAIL } = STATUS_CODE

    // [409]이메일 중복
    if (res.status === CONFLICT_EMAIL) {
      const conflictError = new Error(`${CONFLICT_EMAIL}: 이메일 중복`)
      conflictError.status = CONFLICT_EMAIL
      handleAuthenticationError(conflictError)
    }
  } catch (e) {
    handleAuthenticationError(e)
    handleConflictEmailError()
  }
}

// [SIGNUP] POST 요청, /folder 이동
const handleSignup = async (email = '', password = '') => {
  try {
    const {
      data: {
        data: { accessToken, refreshToken },
      },
    } = await instance.post(SIGNUP_URL, { email, password })

    localStorage.setItem(ACCESS_TOKEN, accessToken)
    localStorage.setItem(REFRESH_TOKEN, refreshToken)

    redirectToPage(FOLDER_PATH)
  } catch (e) {
    handleAuthenticationError(e)
  }
}

export { handleSignin, handleSignup, emailConflictCheck }
