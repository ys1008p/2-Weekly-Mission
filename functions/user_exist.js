const registeredUsers = [{ email: "test@codeit.com", password: "codeit101" }];

const isExistEmail = function (emailValue) {
  return registeredUsers.find ((el) => el.email === emailValue);
}

const isExistUser = function (emailValue, passwordValue) {
  const isExistEmail= registeredUsers.find ((el) => el.email === emailValue);
  
  return (isExistEmail?.password === passwordValue) ? true : false;
}

export { isExistEmail, isExistUser };