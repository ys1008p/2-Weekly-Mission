const SIGN_INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MESSAGE_CLASSNAME = "error-message-on";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export function setInputError(elements, message) {
  elements.input.className += ` ${SIGN_INPUT_ERROR_CLASSNAME}`;
  elements.errorMessage.className += ` ${ERROR_MESSAGE_CLASSNAME}`;
  elements.errorMessage.textContent = message;
}

export function removeInputError(elements) {
  elements.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.remove(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = "";
}

export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

export function isPasswordValid(password) {
  const isEightLettersOrMore = password.length >= 8;
  const hasNumberAndCharacter = password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && hasNumberAndCharacter;
}

export function togglePassword(input, toggleButton) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleButton.getElementsByTagName("img")[0].setAttribute("src", "./images/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleButton.getElementsByTagName("img")[0].setAttribute("src", "./images/eye-off.svg");
}

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

  // --로그인POST요청----
export async function signApi(auth) { 
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
  method: "POST", 
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(auth),
});
return response.ok;
 } catch (error) {
  console.error(error);
 }
};

 // 중복된 이메일 체크 
 export async function Manyemail(email) {
  try {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(email),
  });
  return response.status;
   
} catch (error) {
  console.error(error.message)
}
 }

// 회원가입 정보 일치하면 로그인되게끔
export const signUp = async function() {
  try {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(),
  });
  return response.ok
} catch(error) {
  console.error(error)
}
}