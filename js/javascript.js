document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");

  emailInput.addEventListener("focus", function () {
    if (emailInput.value === "") {
      emailInput.placeholder = "내용 작성 중...";
    }
  });

  emailInput.addEventListener("blur", function () {
    if (emailInput.value === "") {
      emailInput.placeholder = "";
    }
  });
});
