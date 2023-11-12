import { btn, inputs, email, password, isValidEmail, isValidPassword, errActionAll, eye2, eyeToggle } from "./common.js";
import { usersData } from "./userData.js";

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

function ourMembers (e) {
  for(let user of usersData){
    if (email.value === user[0] && password.value === user[1]) {
      e.preventDefault()
      window.location.href = 'folder.html';
    } if(email.value !== user[0]){
      email.classList.add('err');
      return alert('이메일을 확인해 주세요');
    } else {
      password.classList.add('err');
      return alert ('비밀번호를 확인해 주세요')
    }
  }
}
// 알림창 두번뜨는 오류 있음

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