//에러 발생 시 테두리 색 변경 및 에러 메세지 추가: 이메일
function addRedBorder(el) {
  el.classList.add("error-border");
}

// 이메일 유효성 검사
function isValidEmail(email) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if (!pattern.test(email)) {
    return false;
  } else {
    return true;
  }
}

function addErrorMessage() {
  const input = document.querySelector("input.email"); //input: 이메일 입력란
  const p = document.createElement("p"); //input 박스 밑 에러 메세지 요소 추가
  p.classList.add("error-message"); //에러 메세지용 p태그에 빨간 글씨 클래스 추가
  const userEmailInput = input.value; //사용자의 이메일 입력값

  let message = "";

  //상태 체크 후 상황에 맞는 메세지
  if (!userEmailInput) {
    addRedBorder(input);
    message = "이메일을 입력해주세요.";
  } else if (!isValidEmail(userEmailInput)) {
    addRedBorder(input);
    message = "올바른 이메일 주소가 아닙니다.";
  } else if (userEmailInput === "test@codeit.com") {
    addRedBorder(input);
    message = "이미 사용 중인 이메일입니다.";
  }

  //input 텍스트 요소에 에러 메세지 추가
  p.textContent = message;
}

input.addEventListener("focusout", () => {
  //왜 에러가 나지?
  addErrorMessage();
});
