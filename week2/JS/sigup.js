
import { btn, email, password, checkPassword } from "./common.js";
import { usersData } from "./userData.js";

// function errActionJoin (e) {
//   const text = document.createElement('p');
//   text.classList.add('errText')
//   const deleteErrText = document.querySelector('.errText');

//   if (deleteErrText) {
//     deleteErrText.previousElementSibling.classList.remove('err');
//     deleteErrText.remove(); 
//     };
//     for(let user of usersData){
//   if (email.value === user[0]) {
//     text.textContent = '이미 사용 중인 이메일입니다.';
//     e.target.classList.add('err');
//     email.after(text);
//     }
//   }
// }

email.addEventListener('focusout', errActionJoin);

function join (e) {
  if (isValidEmail(email.value) && password.value === checkPassword.value) {
    e.preventDefault();
    window.location.href = 'folder.html';
  }
}

btn.addEventListener('click', join)
btn.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    join()
  } 
})
  