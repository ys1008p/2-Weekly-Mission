const emailInput = document.querySelector('.email-input');
const pswdInput = document.querySelector('.password-input');
const pswdEye = document.querySelector('.button-eye');
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
  },
  password: {
    noInput: '비밀번호를 입력해주세요.',
    loginFail: '비밀번호를 확인해주세요.',
  },
};

function errorAlertEmail(e) {
  if (emailInput.value.length === 0) {
    if (emailInput.nextElementSibling.className !== 'alert') {
      const message = document.createElement('div');
      message.classList.toggle('alert');
      message.textContent = alertMessageBox.email.noInput;
      emailInput.after(message);
    }
  } else if (!emailInput.value.includes('@')) {
    if (emailInput.nextElementSibling.className === 'alert') {
      emailInput.nextElementSibling.remove();
    }
    const message = document.createElement('div');
    message.classList.toggle('alert');
    message.textContent = alertMessageBox.email.inappropriateValue;
    emailInput.after(message);
  } else {
    if (emailInput.nextElementSibling.className === 'alert') {
      emailInput.nextElementSibling.remove();
    }
  }
}

function errorAlertPswd(e) {
  if (pswdInput.value.length === 0) {
    if (pswdInput.nextElementSibling.className !== 'alert') {
      const message = document.createElement('div');
      message.classList.toggle('alert');
      message.textContent = alertMessageBox.password.noInput;
      pswdInput.after(message);
    }
  } else {
    if (pswdInput.nextElementSibling.className === 'alert') {
      pswdInput.nextElementSibling.remove();
    }
  }
}

function seeOrNotPassword(e) {
  if (pswdInput.type === 'password') {
    pswdInput.type = 'text';
    e.target.src = '/images/eye-on.svg';
  } else if (pswdInput.type === 'text') {
    pswdInput.type = 'password';
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
    if (
      // 잘못된 로그인 시도를 연속해서 진행할 경우에 에러메세지가 쌓이는 현상 방지
      emailInput.nextElementSibling.className !== 'alert' &&
      pswdInput.nextElementSibling.className !== 'alert'
    ) {
      // 에러 메세지 생성
      const messageE = document.createElement('div');
      messageE.classList.toggle('alert');
      messageE.textContent = alertMessageBox.email.loginFail;
      emailInput.after(messageE);

      const messageP = document.createElement('div');
      messageP.classList.toggle('alert');
      messageP.textContent = alertMessageBox.password.loginFail;
      pswdInput.after(messageP);
    }
  }
}

emailInput.addEventListener('focusout', errorAlertEmail);
pswdInput.addEventListener('focusout', errorAlertPswd);
pswdEye.addEventListener('click', seeOrNotPassword);
loginBtn.addEventListener('click', submit);
