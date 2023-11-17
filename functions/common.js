// 인풋 박스에 나타난 에러를 초기화하는 함수
function removeRedMessage(inputBox) {
  if (inputBox.nextSibling.className == "message") {
    inputBox.nextSibling.remove();
    inputBox.classList.remove("redBox");
  }
}

// 인풋 박스에 에러 메세지를 나타내는 함수
function createRedMessage(inputBox, notice) {
  inputBox.classList.add("redBox");

  const div = document.createElement("div");
  div.textContent = notice;
  div.classList.add("message");
  inputBox.after(div);
}

// 눈 모양 아이콘으로 비밀번호 표시 여부를 결정하는 함수
function changePasswordVision(e) {
  const eyeBtnClass = e.target.classList;
  let password = e.target.parentElement.children[1];

  eyeBtnClass.toggle("active");
  password.type = eyeBtnClass.contains("active") ? "text" : "password";
}

// 이메일과 비밀번호 정보를 api로 리퀘스트 보내고 리스폰스 받는 함수
async function isValidAccess(tryacessUser, local) {
  const link = "https://bootcamp-api.codeit.kr/api";
  const userInfoCount = Object.keys(tryacessUser).length;

  try {
    const response = await fetch(`${link}/${local}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tryacessUser),
    });

    if (response.ok && userInfoCount === 2) {
      const result = await response.json();
      const accessToken = result.data.accessToken;
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
