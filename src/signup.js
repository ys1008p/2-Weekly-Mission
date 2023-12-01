function togglePasswordVisibility(e) {
  const target = e.target
  const passwordField = target.parentElement.querySelector('.pw')

  if (passwordField.type === "password") {
    passwordField.type = "text";
    target.classList.remove('toggle-password');
    target.classList.add('toggle-password-pressed');
  }
  else {
    passwordField.type = "password";
    target.classList.add('toggle-password');
    target.classList.remove('toggle-password-pressed');
}
}



// function emailDuplicationError (e) {
//   const emailDuplication = document.querySelector('.emailDuplication');
//   const InputTarget = e.target
//   emailDuplication.classList.remove('inputError');
  

//   if(InputTarget.value === 'test@codeit.com'){
//     emailDuplication.textContent = '이미 사용 중인 이메일입니다.'
//     emailDuplication.classList.add('inputError')
//     InputTarget.classList.add('inputErrorBorder')
//   }

//   else{
//     emailDuplication.textContent = ''
//     emailDuplication.classList.remove('inputError')
//     InputTarget.classList.remove('inputErrorBorder')
//   }
// }

function passwordLengthError (e) {
  const lengthRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+]{8,}$/
  const passwordLength = document.querySelector('.passwordLength');
  const InputTarget = e.target
  passwordLength.classList.remove('inputError');
  

  if(!lengthRegex.test(InputTarget.value)){
    passwordLength.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    passwordLength.classList.add('inputError')
    InputTarget.classList.add('inputErrorBorder')

  }

  else{
    passwordLength.textContent = ''
    passwordLength.classList.remove('inputError')

    InputTarget.classList.remove('inputErrorBorder')
  }
}

function passwordSameError (e) {
  const passwordSameError = document.querySelector('.passwordSame');
  const InputTarget = e.target
  passwordSameError.classList.remove('inputError');
  

  if(InputTarget.value !== passwordInput.value ){
    passwordSameError.textContent = '비밀번호가 일치하지 않아요'
    passwordSameError.classList.add('inputError')
    InputTarget.classList.add('inputErrorBorder')
  }

  else{
    passwordSameError.textContent = ''
    passwordSameError.classList.remove('inputError')
    InputTarget.classList.remove('inputErrorBorder')
  }
}

// function canISignup () {
//   const emailDuplication = document.querySelector('.emailDuplication');
//   const passwordLength = document.querySelector('.passwordLength');
//   const passwordSameError = document.querySelector('.passwordSame');
//   const canI =
//     emailDuplication.classList.contains('inputError')
//     ||passwordLength.classList.contains('inputError')
//     ||passwordSameError.classList.contains('inputError');

//   if(canI){
//     alert('다시입력해주세요');
//   }
//   // else{
//   //     window.location.href = "./folder/"
//   // }

// }

function Enter (e){
  if (e.key ==='Enter'){
    e.preventDefault ();
    // canISignup ();
  }
};




//로그인, 회원가입 불가
const emailDuplication = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password-check');
const signUpping = document.querySelector('#signUpping');

// emailDuplication.addEventListener('focusout', emailDuplicationError);
passwordInput.addEventListener('focusout', passwordLengthError);
passwordCheckInput.addEventListener('focusout', passwordSameError);
// signUpping.addEventListener('mousedown',canISignup);


//엔터쳤을때 회원가입
emailDuplication.addEventListener('keydown',Enter);
passwordInput.addEventListener('keydown',Enter);
passwordCheckInput.addEventListener('keydown',Enter);


const eye = document.querySelector('.eye');
const eye2 = document.querySelector('.eye2');

eye.addEventListener('click', togglePasswordVisibility);
eye2.addEventListener('click', togglePasswordVisibility);
