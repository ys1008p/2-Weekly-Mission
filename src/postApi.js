import { printErrorMessage } from '../common/validators.js';
import { ERROR_MESSAGE } from '../common/constants.js';

export function signinApi(userId, userPassword) {
  fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userId,
      password: userPassword,
    }),
  })
    .then(response => {
      if (response.status === 200) {
        window.location.href = '/folder.html';
      } else if (response.status === 400) {
        throw new Error('없는 정보입니다. 아이디와 비밀번호를 확인해주세요.');
      }
    })
    .catch(error => {
      console.log(error.message);
    });
}

export function signupApi(userId, userPassword, emailInput, emailWarningTag) {
  fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userId,
    }),
  })
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        throw new Error('이미 사용 중인 이메일입니다.');
      } else {
        return fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: userId,
            password: userPassword,
          }),
        });
      }
    })
    .then(response => {
      if (response.status === 200) {
        window.location.href = '/folder.html';
      }
    })
    .catch(error => {
      printErrorMessage(emailInput, emailWarningTag, ERROR_MESSAGE.duplicateEmail);
    });
}
