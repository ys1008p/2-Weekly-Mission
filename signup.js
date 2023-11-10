

const inputEmail = document.querySelector('#useremail');
const inputPassword = document.querySelector('#password');
const inputPasswordCheck = document.querySelector('#password-check');
const btn = document.querySelector('.join-button');
let emailValid, passwordValid, checkValid = false;

function enterEmailMessage(e) {
  const emailFormat = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (inputEmail.nextSibling.className == 'message') {
    inputEmail.nextSibling.remove();
  }

  if (!inputEmail.value) {
    inputEmail.classList.add('redBox');

    const message = document.createElement('div');
    message.textContent = '이메일을 입력해주세요.';
    message.classList.add('message');
    inputEmail.after(message);
  } else if (inputEmail.value === 'test@codeit.com') {
    inputEmail.classList.add('redBox');
  
    const message = document.createElement('div');
    message.textContent = '이미 사용 중인 이메일입니다.';
    message.classList.add('message');
    inputEmail.after(message);
  
  } else if (!emailFormat.test(inputEmail.value)) {
    inputEmail.classList.add('redBox');

    const message = document.createElement('div');
    message.textContent = '올바른 이메일 주소가 아닙니다.';
    message.classList.add('message');
    inputEmail.after(message);
  } else {
    emailValid = true;
    inputEmail.classList.remove('redBox');
  }
}

function enterPasswordMessage(e) {
  const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  if (inputPassword.nextSibling.className == 'message') {
    inputPassword.nextSibling.remove();
  }

  if (!passwordFormat.test(inputPassword.value)) {
    inputPassword.classList.add('redBox');

    const message = document.createElement('div');
    message.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    message.classList.add('message');
    inputPassword.after(message);
  } else {
    passwordValid = true;
    inputPassword.classList.remove('redBox');
  }
}

function enterPasswordCheckMessage(e) {

  if (inputPasswordCheck.nextSibling.className == 'message') {
    inputPasswordCheck.nextSibling.remove();
  }

  if (inputPassword.value !== inputPasswordCheck.value) {
    inputPasswordCheck.classList.add('redBox');
  
    const message = document.createElement('div');
    message.textContent = '비밀번호가 일치하지 않아요.';
    message.classList.add('message');
    inputPasswordCheck.after(message);
  } else {
    checkValid = true;
    inputPasswordCheck.classList.remove('redBox');
  }
}

inputEmail.addEventListener('focusout', enterEmailMessage);
inputPassword.addEventListener('focusout', enterPasswordMessage);
inputPasswordCheck.addEventListener('input', enterPasswordCheckMessage);
btn.addEventListener('click', function(e) {
  e.preventDefault();
  enterEmailMessage();
  enterPasswordMessage();
  enterPasswordCheckMessage();

  if (emailValid && passwordValid && checkValid) {
    window.open("/folder", "_self");
    emailValid, passwordValid, checkValid = false;
  }
});
