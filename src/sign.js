// 비밀번호 input
const eyeBtn = document.getElementById("eye-btn");
const pwInput = document.getElementById("pwd");
// 비밀번호 확인 input
const eyeBtnCheck = document.getElementById("eye-btn-check");
const pwCheckInput = document.getElementById("pwd-check");
// eye icon
const eyeOff = document.querySelector(".off-img");
const eyeOn = document.querySelector(".on-img");
//eye check
const eyeCheckOn = document.querySelector(".check-on");
const eyeCheckOff = document.querySelector(".check-off");

//비밀번호 input
eyeBtn.addEventListener("click", () => {
  if (pwInput.type === "password") {
    pwInput.type = "text";
    eyeOn.style.display = "block";
    eyeOff.style.display = "none";
  } else {
    pwInput.type = "password";
    eyeOff.style.display = "block";
    eyeOn.style.display = "none";
  }
});
// 비밀번호 확인 input
eyeBtnCheck.addEventListener("click", () => {
  if (pwCheckInput.type === "password") {
    pwCheckInput.type = "text";
    eyeCheckOn.style.display = "block";
    eyeCheckOff.style.display = "none";
  } else {
    pwCheckInput.type = "password";
    eyeCheckOff.style.display = "block";
    eyeCheckOn.style.display = "none";
  }
});
