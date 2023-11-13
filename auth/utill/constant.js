export const ERROR_MESSAGE = {
  signin: {
    EMPTY_EMAIL: "이메일을 입력해주세요.",
    EMPTY_PASSWORD: "비밀번호를 입력해주세요.",
    INVALID_EMAIL: "이메일을 확인해주세요",
    INVALID_PASSWORD: "비밀번호를 확인해주세요.",
  },
  signup: {
    EMPTY_EMAIL: "이메일을 입력해주세요.",
    EMPTY_PASSWORD: "비밀번호를 입력해주세요.",
    INVALID_EMAIL: "올바른 이메일 주소가 아닙니다.",
    INVALID_PASSWORD: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    EXIST_EMAIL: "이미 존재하는 이메일입니다.",
    MISMATCH_PASSWORD: "비밀번호가 일치하지 않아요",
  },
};

export const ERROR_PREFIX = {
  empty: "EMPTY_",
  invalid: "INVALID_",
  mismatch: "MISMATCH_",
};

export const PATTERN = {
  email:
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  "confirm-password": /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};
