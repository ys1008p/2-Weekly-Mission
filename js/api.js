import { emailInput, passwordInput, errorMessageDiv, errorMessage } from "./consts.js";
import { signInError, showError } from "./functions.js";

async function signInAPI() {
  const userInfo = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (response.status === 200) {
      const responseObject = await response.json();
      const ACCESSTOKEN = responseObject.data.accessToken;
      localStorage.setItem("accessToken", ACCESSTOKEN);
      location.href = "./folder.html";
    } else {
      signInError();
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function signUpEmailCheckAPI() {
  const userInfo = {
    email: emailInput.value,
  };
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (response.status === 409) {
      showError(emailInput, errorMessageDiv[0], errorMessage.alreadyUsedEmail);
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function signUpAPI() {
  const userInfo = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (response.status === 200) {
      const responseObject = await response.json();
      const ACCESSTOKEN = responseObject.data.accessToken;
      localStorage.setItem("accessToken", ACCESSTOKEN);
      location.href = "./folder.html";
    }
  } catch (error) {
    console.log(error.message);
  }
}

export { signInAPI, signUpEmailCheckAPI, signUpAPI };