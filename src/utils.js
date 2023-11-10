export const TEST_USER = {
  email: 'test@codeit.com',
  password: 'codeit101',
};

export const alertMessageBox = {
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

export const emailInput = document.querySelector('.email-input');
export const pswdInput = document.querySelector('.password-input');
export const pswdCheck = document.querySelector('#password-check');
export const pswdEye = document.querySelectorAll('.button-eye');
export const loginBtn = document.querySelector('.button-submit');

export function isPasswordValid(password) {
  const isEightLettersOrMore = password.length >= 8;
  const hasNumberAndCharacter =
    password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && hasNumberAndCharacter;
}

export function redBoxOn(whichBox) {
  whichBox.classList.add('redBox');
}

export function redBoxOff(whichBox) {
  whichBox.classList.remove('redBox');
}

// 에러 메세지가 발생해야 하는 위치, 에러 종류를 파라미터로 받고 메세지를 생성
export function makeErrorMessage(errorPlace, messageType) {
  const message = document.createElement('div');
  message.classList.toggle('alert');
  message.textContent = alertMessageBox[errorPlace][messageType];
  switch (errorPlace) {
    case 'email':
      emailInput.after(message);
      redBoxOn(emailInput);
      break;
    case 'password':
      pswdInput.after(message);
      redBoxOn(pswdInput);
      break;
    case 'passwordCheck':
      pswdCheck.after(message);
      redBoxOn(pswdCheck);
      break;
  }
}

// 에러 메세지를 삭제할 위치를 파라미터로 받고 메세지를 삭제
export function eraseErrorMessage(errorPlace) {
  let placeToErase;
  switch (errorPlace) {
    case 'email':
      placeToErase = emailInput;
      redBoxOff(emailInput);
      break;
    case 'password':
      placeToErase = pswdInput;
      redBoxOff(pswdInput);
      break;
    case 'passwordCheck':
      placeToErase = pswdCheck;
      redBoxOff(pswdCheck);
      break;
  }
  if (placeToErase.nextElementSibling.className === 'alert') {
    placeToErase.nextElementSibling.remove();
  }
}
