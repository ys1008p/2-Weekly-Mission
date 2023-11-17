import { email, password, inputs, btn, eye2 } from "../sig_all/contants.js";
import {existEmail, errText , existPWd, isValidEmail, isValidPassword,passwordError ,eyeToggle} from "../sig_all/utils/sig_all_func.js";


function checkTemplate (e) {
  if (e.target === email) {
    if (isValidEmail(e.target.value)){
     e.target.classList.remove('err');
     e.target.nextElementSibling === errText? errText.textContent = '' : undefined;
    }
  }
  if (e.target === password){
    if (isValidPassword(e.target.value)){
      e.target.classList.remove('err')
      // e.target.nextElementSibling === errText? errText.textContent = '' : undefined;
    }
  }
}

function ourMembers (e) {
  e.preventDefault()
    if (existEmail && existPWd) {
      window.location.href = 'folder.html';
    } if(!existEmail){
      email.classList.add('err');
      return alert('이메일을 확인해 주세요');
    } else {
      password.classList.add('err');
      return alert ('비밀번호를 확인해 주세요')
    }
  }

password.addEventListener('focusout', passwordError)
inputs.forEach(inputElement => {
  inputElement.addEventListener('focusout',checkTemplate);
});

btn.addEventListener('submit', ourMembers )


eye2.addEventListener('click', eyeToggle);