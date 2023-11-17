 import { email, password, checkPassword, btn, eye1, eye2, inputs,testData} from "../sig_all/contants.js";
 import {errText ,isValidEmail, isValidPassword,passwordError ,eyeToggle,} from "../sig_all/utils/sig_all_func.js";

 function joinMembers (e) {
  if (e.target === email) {
    if (isValidEmail(e.target.value) && testData.some((member) => member.userEmail !== email.value)){
      e.target.classList.remove('err')
      e.target.nextElementSibling === errText? errText.remove() : undefined;
    } ; 
  }else if(e.target === password ){
    if (isValidPassword(e.target.value)){
      e.target.classList.remove('err')
      e.target.nextElementSibling === errText? errText.remove() : undefined;
    }
  }else if (e.target === checkPassword) {
    if(password.value === checkPassword.value){
      e.target.classList.remove('err')
      e.target.nextElementSibling === errText? errText.remove() : undefined;
    }
  } 
 }

function join (e) {
  e.preventDefault()

  if (!isValidEmail(email.value) || testData.some((member) => member.userEmail === email.value)){
    email.classList.add('err')
    alert('이메일을 확인해주세요');

  }else if (password.value !== checkPassword.value || !isValidPassword(password.value)) {
    checkPassword.classList.add('err')
    password.classList.add('err');
    alert('비밀번호를 확인해주세요');

  } else if (testData.some((member) => member.userEmail !== email.value)) {
    window.location.href = 'folder.html';
  }
}

password.addEventListener('focusout', passwordError)
checkPassword.addEventListener('focusout', passwordError)

// btn.addEventListener('event',join);

btn.addEventListener('click',join)
 

inputs.forEach(inputElement => {
  inputElement.addEventListener('focusout',joinMembers);
});

eye1.addEventListener('click', eyeToggle);
eye2.addEventListener('click', eyeToggle);