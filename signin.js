
let div1 = document.getElementById("div1");
let input1 = document.getElementById("email");
input1.addEventListener("focus", () => {
  div1.style.border = "1px solid #6D6AFE";
});
input1.addEventListener("blur", () => {
  div1.style.border = "1px solid #CCD5E3";
});

let div2 = document.getElementById("div2");
let input2 = document.getElementById("password");
input2.addEventListener("focus", () => {
  div2.style.border = "1px solid #6D6AFE";
});
input2.addEventListener("blur", () => {
  div2.style.border = "1px solid #CCD5E3";
});

let password_show_button = document.querySelector(".div2-img");
let password_input = document.getElementById("password");

password_show_button.addEventListener("click", () => {
   if (password_input.type === "password") {
      password_input.type = "text"; // 비밀번호를 텍스트로 변경
   } else {
      password_input.type = "password"; // 다시 비밀번호로 변경
   }
});