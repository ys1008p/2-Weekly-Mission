export const TEST_USER = {
  email: 'test@codeit.com',
  password: 'codeit101',
};

export const alertMessageBox = {
  email: {
    noInput: '이메일을 입력해주세요.',
    inappropriateValue: '올바른 이메일 주소가 아닙니다.',
    loginFail: '이메일을 확인해주세요.',
  },
  password: {
    noInput: '비밀번호를 입력해주세요.',
    loginFail: '비밀번호를 확인해주세요.',
  },
};

export const emailInput = document.querySelector('.email-input');
export const pswdInput = document.querySelector('.password-input');
export const pswdEye = document.querySelector('.button-eye');
export const loginBtn = document.querySelector('.button-submit');

// 에러 메세지가 발생해야 하는 위치, 에러 종류를 파라미터로 받고 메세지를 생성
export function makeErrorMessage(errorPlace, messageType) {
  const message = document.createElement('div');
  message.classList.toggle('alert');
  message.textContent = alertMessageBox[errorPlace][messageType];
  switch (errorPlace) {
    case 'email':
      emailInput.after(message);
      break;
    case 'password':
      pswdInput.after(message);
      break;
  }
}

// 에러 메세지를 삭제할 위치를 파라미터로 받고 메세지를 삭제
export function eraseErrorMessage(errorPlace) {
  let placeToErase;
  switch (errorPlace) {
    case 'email':
      placeToErase = emailInput;
      break;
    case 'password':
      placeToErase = pswdInput;
      break;
  }
  if (placeToErase.nextElementSibling.className === 'alert') {
    placeToErase.nextElementSibling.remove();
  }
}
