import { btn, inputs, email, password, isValidEmail, isValidPassword, errActionAll, eye2, eyeToggle } from "./common.js";
import { usersData } from "./userData.js";

// errActionAll(e.target === password)? e.target.previousElementSibling.classList.add('err_eye1'): e.target.previousElementSibling.classList.remove('err_eye1') ; 

function checkTemplate (e) {
  if (e.target === email) {
    if (isValidEmail(e.target.value)){
     e.target.classList.remove('err');
    }
  }
  if (e.target === password){
    if (isValidPassword(e.target.value)){
      e.target.classList.remove('err')
    }
  }
}
// err txt 가 안지워져요..


function ourMembers (e) {
  for(let user of usersData){
    if (email.value === user[0] && password.value === user[1]) {
      e.preventDefault()
      window.location.href = 'folder.html';
    } else if(email.value !== user[0]){
      return alert('이메일을 확인해 주세요');
    } else {
      return alert ('비밀번호를 확인해 주세요')
    }
  }
}

inputs.forEach(inputElement => {
  inputElement.addEventListener('focusout',checkTemplate);
});

btn.addEventListener('click', ourMembers)
btn.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    ourMembers()
  } 
})

eye2.addEventListener('click', eyeToggle);