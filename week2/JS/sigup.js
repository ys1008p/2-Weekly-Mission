 import { btn,inputs , email, password, isValidEmail, isValidPassword,checkPassword, eye1, eye2, eyeToggle } from "./common.js";
 import { usersData } from "./userData.js";

//  errActionAll(e.target === password)? e.target.previousElementSibling.classList.add('err_eye1'): e.target.previousElementSibling.classList.remove('err_eye1') ; 
//  errActionAll(e.target === checkPassword)? e.target.previousElementSibling.classList.add('err_eye2'): e.target.previousElementSibling.classList.remove('err_eye2'); 
//적용안됨..

 function joinMembers (e) {
  for(let user of usersData){
    if (e.target === email) {
      if (isValidEmail(e.target.value) && email.value !== user[0]){
        e.target.classList.remove('err')
      } ; 
    }else if(e.target === password ){
      if (isValidPassword(e.target)){
        e.target.classList.remove('err')
      }
    }else if (e.target === checkPassword) {
      if(password.value === checkPassword.value){
        e.target.classList.remove('err')
      }
    } 
 }
}

function join (e) {
  if (e) {
    e.preventDefault()
    if (!isValidEmail(email.value)){
      alert('이메일을 확인해주세요');
    }if (password.value !== checkPassword.value) {
      checkPassword.classList.add('err')
      alert('비밀번호를 확인해주세요');
    } else {
        window.location.href = 'folder.html';
    }
  }
}

btn.addEventListener('click', join);
btn.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    join()
  } 
});


inputs.forEach(inputElement => {
  inputElement.addEventListener('focusout',joinMembers);
});


eye1.addEventListener('click', eyeToggle);
eye2.addEventListener('click', eyeToggle);


