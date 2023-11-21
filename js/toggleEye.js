// import { password, password2 } from "./sign.js";

// const toggleEye = document.querySelectorAll('.eye');
// function toggleEyeHandler(){
//   for (let i = 0; i < toggleEye.length; i++){
//     if (toggleEye[i].classList.contains('eye-off')){
//       toggleEye[i].classList.remove('eye-off');
//       toggleEye[i].classList.add('eye-on');
//       toggleEye[i].childNodes[1].setAttribute('src', 'imgs/sign/eye-on.png');
//       password.type = 'text';
//       password2.type = 'text';
//     } else if (toggleEye[i].classList.contains('eye-on')){
//       toggleEye[i].classList.remove('eye-on');
//       toggleEye[i].classList.add('eye-off');
//       toggleEye[i].childNodes[1].setAttribute('src', 'imgs/sign/eye-off.svg');
//       password.type = 'password';
//       password2.type = 'password';
//     }
//   }
// }
// toggleEye.forEach(eye => {
//   eye.addEventListener('click', toggleEyeHandler);
// });