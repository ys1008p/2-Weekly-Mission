import { REGEX, FOLDER_PATH, PASSWORD_SHOW_MODE } from '../../constants/auth.js'
import { ACCESS_TOKEN } from '../../constants/apis.js'

// [정규식]이메일 검사
function isEmail(email = '') {
  return email ? REGEX.email.test(email) : false
}

// [정규식]패스워드 검사
function isPassword(password = '') {
  return password ? REGEX.password.test(password) : false
}

// 페이지 이동
function redirectToPage(path = '/') {
  location.href = path
}

// 자동 로그인
function autoRedirectToPage(path = '/') {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    redirectToPage(path)
  }
}

// [onClick 핸들러]비밀번호 보기, 숨기기 모드
function handlePasswordShowMode() {
  const { on, off } = PASSWORD_SHOW_MODE

  const currentType = this.previousElementSibling.type // default -> type: password /mode: off
  const showMode = currentType === off.type ? on : off

  this.previousElementSibling.type = showMode.type
  this.setAttribute('aria-label', showMode.label)
  this.setAttribute('aria-checked', showMode.checked)
  this.children[0].setAttribute('src', showMode.imgSrc)
}

export {
  isEmail,
  isPassword,
  redirectToPage,
  autoRedirectToPage,
  handlePasswordShowMode,
}
