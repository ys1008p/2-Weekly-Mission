//이메일 input의 focusout 이벤트 핸들러

const email = document.querySelector('[name="email"]');

email.addEventListener("focusout", function (e) {
  const message = document.createElement("p");

  if (!email.value) {
    message.textContent = "이메일을 입력해주세요.";
  } else if (email.value === "test@codeit.com") {
    message.textContent = "이미 사용 중인 이메일입니다.";
  }
});
