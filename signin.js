const emailInput = document.querySelector('.email-input');
const pswdInput = document.querySelector('.password-input');
const pswdEye = document.querySelector('.button-eye');
let eyeMode = 'invisible';
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

emailInput.addEventListener('focusout', errorAlertEmail);
pswdInput.addEventListener('focusout', errorAlertPswd);
pswdEye.addEventListener('click', seeOrNotPassword);
