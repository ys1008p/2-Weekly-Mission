export const emailInput = document.querySelector('.email-input');
export const pswdInput = document.querySelector('.password-input');
export const pswdCheck = document.querySelector('#password-check');
export const passwordVisiblilityToggleButtons = document.querySelectorAll('.button-eye');
export const loginBtn = document.querySelector('.button-submit');
export const EYE_ON_PATH = '/images/eye-on.svg';
export const EYE_OFF_PATH = '/images/eye-off.svg';
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const TEST_USER = {
  email: 'test@codeit.com',
  password: 'codeit101',
};

export const ALERT_MESSAGE_BOX = {
  email: {
    noInput: '이메일을 입력해주세요.',
    inappropriateValue: '올바른 이메일 주소가 아닙니다.',
    loginFail: '이메일을 확인해주세요.',
    takenEmail: '이미 사용 중인 이메일입니다.',
  },
  password: {
    noInput: '비밀번호를 입력해주세요.',
    loginFail: '비밀번호를 확인해주세요.',
    simple: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  },
  passwordCheck: {
    matchFail: '비밀번호가 일치하지 않아요.',
  },
};

export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

export function isPasswordValid(password) {
  const isEightLettersOrMore = password.length >= 8;
  const hasNumberAndCharacter = password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && hasNumberAndCharacter;
}

function MakeRedBoxOn(whichBox) {
  whichBox.classList.add('redBox');
}

function MakeRedBoxOff(whichBox) {
  whichBox.classList.remove('redBox');
}

const targetMap = {
  email: emailInput,
  password: pswdInput,
  passwordCheck: pswdCheck,
};

export function makeErrorMessage(errorPlace, messageType) {
  const message = document.createElement('div');
  message.classList.toggle('alert');
  message.textContent = ALERT_MESSAGE_BOX[errorPlace][messageType];
  const placeToMakeMessage = targetMap[errorPlace];

  placeToMakeMessage.after(message);
  MakeRedBoxOn(placeToMakeMessage);
}

export function eraseErrorMessage(errorPlace) {
  const placeToErase = targetMap[errorPlace];

  MakeRedBoxOff(placeToErase);

  if (placeToErase.nextElementSibling.className === 'alert') {
    placeToErase.nextElementSibling.remove();
  }
}

const SIGNIN_API = 'https://bootcamp-api.codeit.kr/api/sign-in';
const EMAIL_CHECK = 'https://bootcamp-api.codeit.kr/api/check-email';
const SIGNUP_API = 'https://bootcamp-api.codeit.kr/api/sign-up';

export async function didSigninSucceed(auth) {
  const response = await fetch(SIGNIN_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  });
  return response.status === 200 ? true : false;
}

export async function isTakenEmail(email) {
  const response = await fetch(EMAIL_CHECK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });
  return response.status === 200 ? true : false;
}

export async function didSignupSucceed(auth) {
  const response = await fetch(SIGNUP_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  });
  return response.status === 200 ? true : false;
}
