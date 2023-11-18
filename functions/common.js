// 인풋 박스에 나타난 에러를 초기화하는 함수
function removeRedMessage(inputBox) {
  inputBox.classList.remove("redBox");
  inputBox.nextElementSibling.classList.remove("message");
  inputBox.nextElementSibling.textContent = "";
}

// 인풋 박스에 에러 메세지를 나타내는 함수
function createRedMessage(inputBox, notice) {
  inputBox.classList.add("redBox");
  inputBox.nextElementSibling.classList.add("message");
  inputBox.nextElementSibling.textContent = notice;
}

// 눈 모양 아이콘으로 비밀번호 표시 여부를 결정하는 함수
function changePasswordVision(eyeBtn) {
  const eyeBtnClass = eyeBtn.classList;
  const passwordBox = eyeBtn.parentElement.children[1];

  eyeBtnClass.toggle("active");
  passwordBox.type = eyeBtnClass.contains("active") ? "text" : "password";
}

// 이메일과 비밀번호 정보를 api로 리퀘스트 보내고 리스폰스 받는 함수
async function isValidAccess(tryConnectUser, local) {
  const link = "https://bootcamp-api.codeit.kr/api";
  const userInfoCount = Object.keys(tryConnectUser).length;

  try {
    const response = await fetch(`${link}/${local}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tryConnectUser),
    });
    if (response.ok && userInfoCount === 2) {
      const {
        data: { accessToken },
      } = await response.json();
      localStorage.setItem("accessToken", accessToken);
    }
    return response.status;
  } catch (e) {
    console.error(e);
  }
}

export {
  removeRedMessage,
  createRedMessage,
  changePasswordVision,
  isValidAccess,
};
