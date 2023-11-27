function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  const eye = document.querySelector('.eye')

  if (passwordField.type === "password") {
    passwordField.type = "text";
    eye.classList.toggle('toggle-password');
    eye.classList.toggle('toggle-password-pressed');
  }
  else {
    passwordField.type = "password";
    eye.classList.toggle('toggle-password');
    eye.classList.toggle('toggle-password-pressed');
}
}

  function togglePasswordVisibility2() {
    const passwordCheckField = document.getElementById("password-check");
    const eye2 = document.querySelector('.eye2')
  
    if (passwordCheckField.type === "password") {
      passwordCheckField.type = "text";
      eye2.classList.toggle('toggle-password');
      eye2.classList.toggle('toggle-password-pressed');
    }
  else {
    passwordCheckField.type = "password";
    eye2.classList.toggle('toggle-password');
    eye2.classList.toggle('toggle-password-pressed');
  }
}


function emailDuplicationError () {
  const emailDuplication = document.querySelector('.emailDuplication');
  const emailInput = document.querySelector('#email');
  emailDuplication.classList.remove('inputError');
  

  if(emailInput.value === 'test@codeit.com'){
    emailDuplication.textContent = '이미 사용 중인 이메일입니다.'
    emailDuplication.classList.add('inputError')
    emailInput.classList.add('inputErrorBorder')
    console.log('asfdsafffs')
  }

  else{
    emailDuplication.textContent = ''
    emailDuplication.classList.remove('inputError')
    emailInput.classList.remove('inputErrorBorder')
  }
}

function passwordLengthError () {
  const lengthRegex = /^.{1,7}$/
  const passwordLength = document.querySelector('.passwordLength');
  const passwordInput = document.querySelector('#password');
  passwordLength.classList.remove('inputError');
  

  if(lengthRegex.test(passwordInput.value)){
    passwordLength.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    passwordLength.classList.add('inputError')
    passwordInput.classList.add('inputErrorBorder')
    console.log('s')
  }

  else{
    passwordLength.textContent = ''
    passwordLength.classList.remove('inputError')
    passwordInput.classList.remove('inputErrorBorder')
  }
}

function passwordSameError () {
  const passwordSameError = document.querySelector('.passwordSame');
  const passwordCheckInput = document.querySelector('#password-check');
  passwordSameError.classList.remove('inputError');
  

  if(passwordCheckInput.value !== passwordInput.value ){
    passwordSameError.textContent = '비밀번호가 일치하지 않아요'
    passwordSameError.classList.add('inputError')
    passwordCheckInput.classList.add('inputErrorBorder')
  }

  else{
    passwordSameError.textContent = ''
    passwordSameError.classList.remove('inputError')
    passwordCheckInput.classList.remove('inputErrorBorder')
  }
}

function canISignup () {
  const emailDuplication = document.querySelector('.emailDuplication');
  const passwordLength = document.querySelector('.passwordLength');
  const passwordSameError = document.querySelector('.passwordSame');
  const canI =
    emailDuplication.classList.contains('inputError')
    ||passwordLength.classList.contains('inputError')
    ||passwordSameError.classList.contains('inputError');

  if(canI){
    alert('다시 한번 잘 입력해보세요');
  }
  else{
      window.location.href = "./folder/"
  }

}

function Enter (e){
  if (e.key ==='Enter'){
    e.preventDefault ();
    canISignup ();
  }
};

//로그인, 회원가입 불가
const emailDuplication = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password-check');
const signUpping = document.querySelector('#signUpping')

emailDuplication.addEventListener('focusout', emailDuplicationError);
passwordInput.addEventListener('focusout', passwordLengthError);
passwordCheckInput.addEventListener('focusout', passwordSameError);
signUpping.addEventListener('mousedown',canISignup);

//엔터쳤을때 회원가입
emailDuplication.addEventListener('keydown',Enter);
passwordInput.addEventListener('keydown',Enter);
passwordCheckInput.addEventListener('keydown',Enter);


const eye = document.querySelector('.eye');
const eye2 = document.querySelector('.eye2');

eye.addEventListener('click', togglePasswordVisibility)
eye2.addEventListener('click', togglePasswordVisibility2)