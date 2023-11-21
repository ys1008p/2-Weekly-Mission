import { printErrorMessage } from '../common/validators.js';
import { ERROR_MESSAGE } from '../common/constants.js';

export function signinApi(userId, userPassword, emailInput, emailWarningTag) {
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
        return response.json();
      } else if (response.status === 400) {
        printErrorMessage(emailInput, emailWarningTag, ERROR_MESSAGE.wrongEmail);
      }
    })
    .then(result => {
      const accessToken = result.data.accessToken;
      localStorage.setItem('accessToken', accessToken);

      window.location.href = '/folder.html';
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
        printErrorMessage(emailInput, emailWarningTag, ERROR_MESSAGE.duplicateEmail);
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
    });
}
