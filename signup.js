const emailInput = document.querySelector('.email-input');
const pswdInput = document.querySelector('.password-input');
const pswdCheck = document.querySelector('#password-check');
const pswdEye = document.querySelectorAll('.button-eye');
const loginBtn = document.querySelector('.button-submit');

const TEST_USER = {
  email: 'test@codeit.com',
  password: 'codeit101',
};

const alertMessageBox = {
  email: {
    noInput: '이메일을 입력해주세요.',
    inappropriateValue: '올바른 이메일 주소가 아닙니다.',
    loginFail: '이메일을 확인해주세요.',
    taken: '이미 사용중인 이메일입니다.',
  },
  password: {
    noInput: '비밀번호를 입력해주세요.',
    loginFail: '비밀번호를 확인해주세요.',
    simple: '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.',
    matchFail: '비밀번호가 일치하지 않아요',
  },
};

// 에러 메세지가 발생해야 하는 위치, 에러 종류를 파라미터로 받고 메세지를 생성
const makeErrorMessage = function (errorPlace, messageType) {
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
};

// 에러 메세지를 삭제할 위치를 파라미터로 받고 메세지를 삭제
const eraseErrorMessage = function (errorPlace) {
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
};

function errorAlertEmail(e) {
  if (emailInput.value.length === 0) {
    if (emailInput.nextElementSibling.className !== 'alert') {
      makeErrorMessage('email', 'noInput');
    }
  } else if (!emailInput.value.includes('@')) {
    eraseErrorMessage('email');
    makeErrorMessage('email', 'inappropriateValue');
  } else {
    eraseErrorMessage('email');
  }
}

function errorAlertPswd(e) {
  if (pswdInput.value.length === 0) {
    if (pswdInput.nextElementSibling.className !== 'alert') {
      makeErrorMessage('password', 'noInput');
    }
  } else {
    eraseErrorMessage('password');
  }
}

function errorAlertPswdCheck(e) {}

function seeOrNotPassword(e) {
  if (pswdInput.type === 'password') {
    pswdInput.type = 'text';
    e.target.src = '/images/eye-on.svg';
  } else if (pswdInput.type === 'text') {
    pswdInput.type = 'password';
    e.target.src = '/images/eye-off.svg';
  }
}

function seeOrNotPasswordCheck(e) {
  if (pswdCheck.type === 'password') {
    pswdCheck.type = 'text';
    e.target.src = '/images/eye-on.svg';
  } else if (pswdCheck.type === 'text') {
    pswdCheck.type = 'password';
    e.target.src = '/images/eye-off.svg';
  }
}

const checkTestUser = function (email, password) {
  return email === TEST_USER.email && password === TEST_USER.password;
};

function submit(e) {
  e.preventDefault();
  if (checkTestUser(emailInput.value, pswdInput.value)) {
    window.location.href = '/folder';
  } else {
    // 연속된 로그인 시도 오류시 에러메세지가 쌓이는 현상 방지
    if (
      emailInput.nextElementSibling.className !== 'alert' &&
      pswdInput.nextElementSibling.className !== 'alert'
    ) {
      makeErrorMessage('email', 'loginFail');
      makeErrorMessage('password', 'loginFail');
    }
  }
}

emailInput.addEventListener('focusout', errorAlertEmail);
pswdInput.addEventListener('focusout', errorAlertPswd);
pswdCheck.addEventListener('focusout', errorAlertPswdCheck);
pswdEye[0].addEventListener('click', seeOrNotPassword);
pswdEye[1].addEventListener('click', seeOrNotPasswordCheck);
loginBtn.addEventListener('click', submit);
