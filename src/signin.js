function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  const eye = document.querySelector('.eye')
  if (passwordField.type === "password") {
    passwordField.type = "text";
    eye.classList.toggle('toggle-password');
    eye.classList.toggle('toggle-password-pressed');
  } else {
    passwordField.type = "password";
    eye.classList.toggle('toggle-password');
    eye.classList.toggle('toggle-password-pressed');
  }
}



function validEmail () {
  const Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  const emailError = document.querySelector('.email-error');
  const emailInput = document.querySelector('#email');
  emailError.classList.remove('inputError');
  

  if(emailInput.value === ''){
    emailError.textContent = '이메일을 입력해주세요.'
    emailError.classList.add('inputError')
    emailInput.classList.add('inputErrorBorder')
  }
  else if(!Regex.test(emailInput.value)){  
    emailError.textContent = '올바른 이메일 주소가 아닙니다.'
    emailError.classList.add('inputError')
    emailInput.classList.add('inputErrorBorder')
  }
  else{
    emailError.textContent = ''
    emailError.classList.remove('inputError')
    emailInput.classList.remove('inputErrorBorder')
  }
}

function noPassword () {
  const passwordError = document.querySelector('.passwordError')
  const passwordInput = document.querySelector('#password');
  passwordError.classList.remove('inputError');
  

  if(passwordInput.value ===''){
    passwordError.textContent = '비밀번호를 입력해주세요.'
    passwordError.classList.add('inputError')
    passwordInput.classList.add('inputErrorBorder')
  }
  else{
    passwordError.textContent = ''
    passwordError.classList.remove('inputError')
    passwordInput.classList.remove('inputErrorBorder')
  }
}


// function testLogin (event) {
//   event.preventDefault ();

//   const emailInput = document.querySelector('#email')
//   const passwordInput = document.querySelector('#password');

//   const emailError = document.querySelector('.email-error');
//   const passwordError = document.querySelector('.passwordError');

//   const loginTest = 
//   (emailInput.value === 'test@codeit.com')&&(passwordInput.value === "codeit101"); 

//   if(loginTest){
//     window.location.href = "./folder/"
//   }
//   else{
    
//     emailError.textContent = '이메일을 확인해주세요.'
//     emailError.classList.add('inputError')
//     emailInput.classList.add('inputErrorBorder')

//     passwordError.textContent = '비밀번호를 확인해주세요.'
//     passwordError.classList.add('inputError')
//     passwordInput.classList.add('inputErrorBorder')
//   }
  
// }


// 로그인 에러메시지
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password');
const signinning = document.querySelector('#signinning')

const eye = document.querySelector('.eye')

emailInput.addEventListener('focusout', validEmail)
passwordInput.addEventListener('focusout',noPassword)

eye.addEventListener('click', togglePasswordVisibility)


