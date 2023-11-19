export const ERROR_MESSAGE = {
  emptyEmail: '이메일을 입력해주세요.',
  emptyPassword: '비밀번호를 입력해주세요.',
  invaildEmail: '올바른 이메일 주소가 아닙니다.',
  invaildPassword: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  wrongEmail: '이메일을 확인해주세요.',
  wrongPassword: '비밀번호를 확인해주세요.',
  duplicateEmail: '이미 사용 중인 이메일입니다.',
  notSamePassword: '비밀번호가 일치하지 않습니다.',
};

export const USER_EMAIL = 'test@codeit.com';
export const USER_PASSWORD = 'sprint101';

export function isEmail(email) {
  let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  return regExp.test(email);
}

export function checkPassword(password) {
  //최소 8자 + 영문, 숫자 조합 비밀번호 정규식
  let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  return regExp.test(password);
}
