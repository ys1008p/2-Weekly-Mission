/*signin.html의 로그인 버튼에 관한 사항 userinfo의 정보가 있다면 folder 페이지로 넘어가는 동작 함수
오류시 오류부분 오류메시지 표시*/
import {
  emailInput,
  passwordInput,
  emailError,
  passwordError,
} from "../tag.js";
import {
  emailRemoveClass,
  passwordRemoveClass,
  emailAddClass,
  passwordAddClass,
} from "../function/AddRemoveFunction.js";

async function buttonClickEvent(e) {
  e.preventDefault();
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;
  const user = { email: userEmail, password: userPassword };
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    

    if (response.status === 200) {
      emailRemoveClass();
      passwordRemoveClass();
      alert(`로그인성공 ${userEmail}님`)
      console.log("로그인 성공", response.status);
      window.location.href = "/folder/folder.html";
    } else if (response.status === 400) {
      passwordAddClass();
      passwordError.textContent = "비밀번호를 확인해주세요.";
      passwordInput.value = "";
      console.error("비밀번호 문제", response.status);
    } else {
      emailInput.value ="";
      passwordInput.value = "";
      emailAddClass();
      emailError.textContent = "이메일이나 비밀번호를 확인해주세요.";
      passwordAddClass();
      passwordError.textContent = "이메일이나 비밀번호를 확인해주세요.";
      console.log("에러 발생", response.status);
    }
  } catch (err) {
    emailInput.value ="";
    passwordInput.value ="";
    emailAddClass();
    emailError.textContent = "이메일을 확인해주세요.";
    passwordAddClass();
    passwordError.textContent = "비밀번호를 확인해주세요.";
    console.log(err);
  }
}

export { buttonClickEvent };
