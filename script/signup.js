import { TEST_USER, NEW_USER } from './utils.js'

const errorMessage = {
  email: {
    unfilled: '이메일을 입력해주세요.',
    invalid: '올바른 이메일 주소가 아닙니다.',
    existed: '이미 사용 중인 이메일입니다.',
    confirm: '이메일 확인해주세요.',
  },
  password: {
    unfilled: '비밀번호를 입력해주세요.',
    invalid: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    inequal: '비밀번호가 일치하지 않아요.',
    confirm: '비밀번호를 확인해주세요.',
  },
}

/* 이메일 유효성 확인 */ 
let isEmailValid = false
let emailValue = ''
const emailInput = document.querySelector('input#useremail')
const emailErrorMessage = document.querySelector('.text-error#error-email')

emailInput.addEventListener('focusout', (event) => {
  const target = event.target
  const EMAIL_REGEX = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/

  if (EMAIL_REGEX.test(target.value)) {
    // 정규식 조건 만족 O
    target.parentNode.classList.remove('error')
    emailErrorMessage.textContent = ''
    isEmailValid = true
    emailValue = target.value

    if (target.value === TEST_USER.email) {
      // 중복
      target.parentNode.classList.add('error')
      emailErrorMessage.textContent = errorMessage.email.existed
    }
  } else {
    // 정규식 조건 만족 X
    target.parentNode.classList.add('error')
    emailErrorMessage.textContent = errorMessage.email.invalid

    if (target.value === '') {
      // 미입력
      emailErrorMessage.textContent = errorMessage.email.unfilled
    }
  }
})
/* 비밀번호 유효성 확인 */
let isPasswordValid = false
let passwordValue = ''
const passwordInput = document.querySelector('input#password')
const passwordErrorMessage = document.querySelector(
  '.text-error#error-password'
)

passwordInput.addEventListener('focusout', (event) => {
  const target = event.target
  const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/

  if (PASSWORD_REGEX.test(target.value)) {
    // 정규식 조건 만족 O
    target.parentNode.parentNode.classList.remove('error')
    passwordErrorMessage.textContent = ''
    isPasswordValid = true
    NEW_USER.password = target.value
    passwordValue = target.value
  } else {
    // 정규식 조건 만족 X
    target.parentNode.parentNode.classList.add('error')
    passwordErrorMessage.textContent = errorMessage.password.invalid
    isPasswordValid = false
    NEW_USER.password = null

    if (target.value === '') {
      // 미입력
      target.parentNode.parentNode.classList.add('error')
      passwordErrorMessage.textContent = errorMessage.password.unfilled
    }
  }
})

/* 비밀번호 재입력 값 일치 확인 */ 
let isConfirmPasswordValid = false
let confirmPasswordValue = ''
const confirmPasswordInput = document.querySelector('input#password-confirm')
const confirmPasswordErrorMessage = document.querySelector(
  '.text-error#error-password-confirm'
)

confirmPasswordInput.addEventListener('focusout', (event) => {
  const target = event.target
  confirmPasswordValue = target.value

  if (target.value === '') {
    // 미입력
    target.parentNode.parentNode.classList.add('error')
    confirmPasswordErrorMessage.textContent = errorMessage.password.unfilled
  } else if (passwordValue === confirmPasswordValue) {
    // 비밀번호 재입력 일치 O
    if (isPasswordValid) {
      target.parentNode.parentNode.classList.remove('error')
      confirmPasswordErrorMessage.textContent = ''
      isConfirmPasswordValid = true
    }
  } else {
    // 비밀번호 재입력 일치 X
    target.parentNode.parentNode.classList.add('error')
    confirmPasswordErrorMessage.textContent = errorMessage.password.inequal
  }
})

/* 회원가입 성공 */ 
const signupForm = document.querySelector('.sign-form')

signupForm.addEventListener('submit', (event) => {
  event.preventDefault()

  if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    // 모든 정규식 조건 만족 O
    location.href = '/folder.html'
  }
  if (!isEmailValid) {
    emailErrorMessage.textContent = errorMessage.email.confirm
  }
  if (!isPasswordValid || isConfirmPasswordValid) {
    passwordErrorMessage.textContent = errorMessage.password.confirm
    confirmPasswordErrorMessage.textContent = errorMessage.password.confirm
  }
})

/* 비밀번호 보기/숨기기 */
const passwordToggleButton = document.querySelectorAll('.button-eye')

function togglePassword(event) {
  const target = event.target

  // MEMO : console.log(target.previousElementSibling) 이렇게 선택하는게 안전한 방식일까? 나중에 형제 요소가 바뀔 수도 있는데...정확하게 형제 요소의 input 태그인 요소를 선택하려면 어떻게 해야 할까...

  if (target.classList.contains('hide')) {
    target.classList.remove('hide')
    target.setAttribute('aria-label', '비밀번호 숨기기')
    target.previousElementSibling.setAttribute('type', 'text')
  } else {
    event.target.classList.add('hide')
    target.setAttribute('aria-label', '비밀번호 보기')
    target.previousElementSibling.setAttribute('type', 'password')
  }
}
passwordToggleButton.forEach((button) => {
  button.addEventListener('click', togglePassword)
})

// MEMO : Refactor 에러 메시지 함수 만들어 보기
