const USER_INPUT = {
  pattern: {
    patternEmail: /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/,
    patternPassword: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
  },
  userInfo: {
    userEmail: 'test@codeit.com',
    userPassword: 'codeit101',
  },
};

const ERROR_MESSEAGE = {
  empty: {
    emptyEmail: '이메일을 입력하세요',
    emptyPassword: '비밀번호를 입력하세요',
  },
  validation: {
    validationEmail: '올바른 이메일 주소가 아닙니다.',
    validationPassword: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  },
  check: {
    checkEmail: '이메일을 확인해주세요.',
    checkPassword: '비밀번호를 확인해주세요.',
  },
  incorrect: {
    email: '이미 사용 중인 이메일입니다.',
    incorrectPassword: '비밀번호가 일치하지않아요.',
  },
};

function EmailEmpty({ focusOut, values }) {
  const { emptyEmail } = ERROR_MESSEAGE.empty;

  return focusOut && values === '' ? <p>{emptyEmail}</p> : <p></p>;
}

function PasswordEmpty({ focusOut, values }) {
  const { emptyPassword } = ERROR_MESSEAGE.empty;

  return focusOut && values === '' ? <p>{emptyPassword}</p> : <p></p>;
}

function EmailValidation({ values, focus, focusOut }) {
  const { patternEmail } = USER_INPUT.pattern;
  const { validationEmail } = ERROR_MESSEAGE.validation;

  return focus && !patternEmail.test(values) && values ? (
    <p>{validationEmail}</p>
  ) : (
    <p>
      {/* <EmailEmpty focusOut={focusOut} values={values} /> */}
    </p>
  );
}

function PwValidation({ values, focus, focusOut }) {
  const { patternPassword } = USER_INPUT.pattern;
  const { validationPassword } = ERROR_MESSEAGE.validation;

  return focus && !patternPassword.test(values) && values ? (
    <p>{validationPassword}</p>
  ) : (
    <p>
      <PasswordEmpty focusOut={focusOut} values={values} />
    </p>
  );
}

function PwCheckValidation({ password, passwordCheck, focus }) {
  const { incorrectPassword } = ERROR_MESSEAGE.incorrect;

  return focus && password !== passwordCheck && passwordCheck ? (
    <p>{incorrectPassword}</p>
  ) : (
    <p></p>
  );
}

export { EmailValidation, PwValidation, PwCheckValidation };
