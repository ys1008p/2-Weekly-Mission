"use strict";

const icons = document.querySelectorAll(".password_eyes");
const pwIcon = icons[0];
const pwCheckedIcon = icons[1];
const pwCheckInput = document.querySelector("#password_check");
const pwInput = document.querySelector("#password");
let pwVisibleToggle = false;
let pwCheckedVisibleToggle = false;

function pwiconChangeHandler() {
  console.log(pwInput);
  if (pwVisibleToggle) {
    pwIcon.src = "./svg/signin/eye-off.svg";
    pwInput.type = "password";
  } else {
    pwIcon.src = "./svg/signin/eye-on.svg";
    pwInput.type = "text";
  }
  pwVisibleToggle = !pwVisibleToggle;
}

function pwCkdIconChangeHandler() {
  if (pwCheckedVisibleToggle) {
    pwCheckedIcon.src = "./svg/signin/eye-off.svg";
    pwCheckInput.type = "password";
  } else {
    pwCheckedIcon.src = "./svg/signin/eye-on.svg";
    pwCheckInput.type = "text";
  }
  pwCheckedVisibleToggle = !pwCheckedVisibleToggle;
}

export {
  icons,
  pwIcon,
  pwCheckedIcon,
  pwiconChangeHandler,
  pwCkdIconChangeHandler,
};
