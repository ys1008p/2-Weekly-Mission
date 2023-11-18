const signRegex = {
  // 이메일
  emailRegex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

  // 비밀번호
  pwMinLength: 8,
  pwRegexOnlyStr: /^[a-zA-Z]+$/,
  pwRegexOnlyNum: /^\d+$/,
};

export { signRegex };
