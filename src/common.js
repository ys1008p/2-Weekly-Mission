const errMsg = {
  emailNone : "이메일을 입력해주세요.",
  emailInvalid : "올바른 이메일 주소가 아닙니다.",
  emailAlready : "이미 사용 중인 이메일입니다.",
  emailCheck : "이메일을 확인해주세요.",

  passwordNone : "비밀번호를 입력해주세요.",
  passwordNotmatch : "비밀번호가 일치하지 않아요.",
  passwordCombo : "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.",
  passwordCheck : "비밀번호를 확인해주세요."
}

const input = {
  email : document.querySelector('#email'),
  password : document.querySelector('#password'),
  passwordConfirm : document.querySelector('#password-confirm'),
  btn : document.querySelector('#btn'),
  eye : document.querySelector('.eye')
}

const userInfo = {
  mail : 'test@codeit.com',
  userpass : 'codeit101'
}

const regexp = {
  text : /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
  pass : /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
}

export {errMsg, input, userInfo, regexp};