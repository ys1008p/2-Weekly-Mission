import {
  BASE_URL,
  REFRESH_TOKEN_URL,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  AUTHORIZATION,
  STATUS_CODE,
} from '../../constants/apis.js'

import { redirectToPage } from './common.js'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
  },
})

// ✨ request interceptor
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN)
    // console.log('accessToken 제대로 들어왔나요? =>', accessToken)

    if (!accessToken) {
      return config
    } else {
      config.headers['Content-Type'] = 'application/json'
      config.headers[AUTHORIZATION] = `${accessToken}`
    }

    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

// ✨ response interceptor
instance.interceptors.response.use(
  (response) => response, // 성공

  async (error) => {
    // 엑세스 토큰 만료
    const { UNAUTHORIZED } = STATUS_CODE

    // [401]
    if (error.response?.status === UNAUTHORIZED) {
      // 토큰 갱신
      const response = await postRefreshToken()

      if (response) {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken)
        localStorage.setItem(REFRESH_TOKEN, response.refreshToken)
        error.config.headers[AUTHORIZATION] = `Bearer ${response.accessToken}`

        // 에러 요청을 토큰 갱신 후 다시 api 요청하기
        const originalResponse = await axios.request(error.config)
        return originalResponse
      } else {
        // 리프레시 토큰 만료 -> '/' 페이지 이동
        localStorage.clear()
        redirectToPage()
      }
    }
    return Promise.reject(error)
  }
)

async function postRefreshToken() {
  try {
    // 리프레시 토큰으로 엑세스 토큰 갱신
    const refreshToken = localStorage.getItem(REFRESH_TOKEN)

    const headers = {
      'Content-Type': 'application/json',
      refresh_token: refreshToken,
    }

    const { data } = await instance.post(REFRESH_TOKEN_URL, {}, { headers })

    return refreshResponse(data)
  } catch (e) {
    console.error(e)
  }
}

// 서버 응답
function refreshResponse(data) {
  return data.flag === 'success' ? data.data[0] : false
}

export { instance }
