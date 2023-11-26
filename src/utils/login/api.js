import { instance } from '../../apis/axiosInstance';
import { getTokenItem, setTokenItem } from './storage';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../store/api';
import { ROUTER_PATH } from '../../store/common';
import { ERROR_MSG } from '../../store/auth';

export const redirectToPage = (path) => {
  location.href = path;
};

export const isAccessToken = () => {
  return getTokenItem(ACCESS_TOKEN) ? true : false;
};

// [로그인]
export const signin = async (email = '', password = '') => {
  const { SHARED_PATH } = ROUTER_PATH;

  try {
    const {
      data: {
        data: { accessToken, refreshToken },
      },
    } = await instance.post('/api/sign-in', { email, password });

    setTokenItem(ACCESS_TOKEN, accessToken);
    setTokenItem(REFRESH_TOKEN, refreshToken);

    redirectToPage(SHARED_PATH);
  } catch (e) {
    console.error('LOGIN)POST API ERROR: ', e.message);
    return { emailError: ERROR_MSG.email.check, passwordError: ERROR_MSG.password.check };
  }
};

// [중복 이메일 확인]
// [회원가입]
