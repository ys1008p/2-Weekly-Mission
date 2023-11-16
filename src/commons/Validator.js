import {
  EmptyEmailInputError,
  EmptyPasswordInputError,
  DifferentPasswordConfirmError,
  InvalidEmailFormatError,
  InvalidPasswordFormatError,
} from "/src/commons/ValidationError.js";

class Validator {
  validate(value) {
    throw new Error("추상메서드 validate는 직접 호출할 수 없습니다.");
  }
}

export class SigninEmailValidator extends Validator {
  validate(email) {
    if (email === undefined || email === null)
      throw new Error("Undefined signin email");
    if (email === "") throw new EmptyEmailInputError();

    return true;
  }
}

export class SigninPasswordValidator extends Validator {
  validate(password) {
    if (!password) throw new EmptyPasswordInputError();

    return true;
  }
}

export class SignupEmailValidator extends Validator {
  validate(email) {
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );

    if (email === undefined || email === null)
      throw new Error("Undefined signup email");
    if (email === "") throw new EmptyEmailInputError();
    if (!emailRegex.test(email)) throw new InvalidEmailFormatError();

    return true;
  }
}

export class SignupPasswordValidator extends Validator {
  #MAX_LENGTH = 8;

  validate(password) {
    const allWordRegex = new RegExp(/^[A-Za-z]*$/);
    const allDigitRegex = new RegExp(/^\d*$/);

    if (
      password.length < this.#MAX_LENGTH ||
      allWordRegex.test(password) ||
      allDigitRegex.test(password)
    )
      throw new InvalidPasswordFormatError();

    return true;
  }
}

export class SignupPasswordConfirmValidator extends Validator {
  validate(passwordConfirm, password) {
    if (passwordConfirm !== password) throw new DifferentPasswordConfirmError();

    return true;
  }
}
