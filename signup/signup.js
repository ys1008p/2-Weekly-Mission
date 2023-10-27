
//로그인 focus시 테두리 효과 변화
let div1 = document.getElementById("div1");
let input1 = document.getElementById("email");
input1.addEventListener("focus", () => {
  div1.style.border = "1px solid #6D6AFE";
});
input1.addEventListener("blur", () => {
  div1.style.border = "1px solid #CCD5E3";
});
//비밀번호 focus시 테두리 효과 변화
let div2 = document.getElementById("div2");
let input2 = document.getElementById("password");
input2.addEventListener("focus", () => {
  div2.style.border = "1px solid #6D6AFE";
});
input2.addEventListener("blur", () => {
  div2.style.border = "1px solid #CCD5E3";
});

//비밀번호확인 focus시 테두리 효과 변화
let div3 = document.getElementById("div3");
let input3 = document.getElementById("password-check");
input3.addEventListener("focus", () => {
  div3.style.border = "1px solid #6D6AFE";
});
input3.addEventListener("blur", () => {
  div3.style.border = "1px solid #CCD5E3";
});
//비밀번호 확인 input focus 시 password-diff 활성화
let psdcheck = document.getElementById("password-check");
let psddiff = document.getElementById("password-diff");
psdcheck.addEventListener("focus", () => {
  psddiff.style.visibility = "visible";
});
psdcheck.addEventListener("blur", () => {
  psddiff.style.visibility = "hidden";
});



// 비밀번호 div 글자보임 효과
let password_show_button = document.querySelector(".div2-img");
let password_input = document.getElementById("password");

password_show_button.addEventListener("click", () => {
   if (password_input.type === "password") {
      password_input.type = "text"; 
   } else {
      password_input.type = "password"; 
   }
});

//비밀번호 확인 div 글자보임 효과
let password_show_button1 = document.querySelector(".div3-img");
let password_input1 = document.getElementById("password-check");

password_show_button1.addEventListener("click", () => {
   if (password_input1.type === "password") {
      password_input1.type = "text"; 
   } else {
      password_input1.type = "password"; 
   }
});


const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('password-check');
const message = document.getElementById('password-diff');

passwordField.addEventListener('input', function() {
  checkPasswordMatch();
});

confirmPasswordField.addEventListener('input', function() {
  checkPasswordMatch();
});

function checkPasswordMatch() {
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  if (password === confirmPassword) {
    message.textContent = '비밀번호가 일치합니다.';
  } else {
    message.textContent = '비밀번호가 다릅니다.';
  }
}