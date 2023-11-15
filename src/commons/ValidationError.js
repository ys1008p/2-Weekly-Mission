const ErrorMessage = {
  ERROR_EMPTY_EMAIL: "이메일을 입력해주세요.",
  ERROR_INVALID_EMAIL_FORMAT: "올바른 이메일 주소가 아닙니다.",
  ERROR_DUPLICATE_EMAIL: "이미 사용 중인 이메일입니다.",
  ERROR_EMPTY_PASSWORD: "비밀번호를 입력해주세요.",
  ERROR_INVALID_PASSWORD_FORMAT:
    "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.",
  ERROR_DIFFER_PASSWORD_CONFIRM: "비밀번호가 일치하지 않아요",
  ERROR_NO_MATCHING_EMAIL: "이메일을 확인해 주세요.",
  ERROR_NO_MATCHING_PASSWORD: "비밀번호를 확인해 주세요.",
};

export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
  }
}

export class EmailValidationError extends ValidationError {
  constructor(message) {
    super(message);
  }
}

export class PasswordValidationError extends ValidationError {
  constructor(message) {
    super(message);
  }
}

export class PasswordConfirmValidationError extends ValidationError {
  constructor(message) {
    super(message);
  }
}

export class EmptyEmailInputError extends EmailValidationError {
  constructor() {
    super(ErrorMessage.ERROR_EMPTY_EMAIL);
    this.name = "Empty email input";
  }
}

export class DuplicatedEmailError extends EmailValidationError {
  constructor() {
    super(ErrorMessage.ERROR_DUPLICATE_EMAIL);
    this.name = "Duplicated email";
  }
}

export class InvalidEmailFormatError extends EmailValidationError {
  constructor() {
    super(ErrorMessage.ERROR_INVALID_EMAIL_FORMAT);
    this.name = "Invalid email format";
  }
}

export class EmptyPasswordInputError extends PasswordValidationError {
  constructor() {
    super(ErrorMessage.ERROR_EMPTY_PASSWORD);
    this.name = "Empty password input";
  }
}

export class InvalidPasswordFormatError extends PasswordValidationError {
  constructor() {
    super(ErrorMessage.ERROR_INVALID_PASSWORD_FORMAT);
    this.name = "Invalid password format";
  }
}

export class DifferentPasswordConfirmError extends PasswordConfirmValidationError {
  constructor() {
    super(ErrorMessage.ERROR_DIFFER_PASSWORD_CONFIRM);
    this.name = "Different password confirm";
  }
}

export class NoMatchingEmailError extends EmailValidationError {
  constructor() {
    super(ErrorMessage.ERROR_NO_MATCHING_EMAIL);
    this.name = "Can't find matching email";
  }
}

export class NoMatchingPasswordError extends PasswordValidationError {
  constructor() {
    super(ErrorMessage.ERROR_NO_MATCHING_PASSWORD);
    this.name = "Can't find matching password";
  }
}
