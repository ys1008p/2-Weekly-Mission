import {errMsg, input, userInfo, regexp} from "./common.js";
const {email, password, passwordConfirm, btn, eye} = input;
const {text, pass} = regexp;
const {emailNone, 
       emailInvalid, 
       emailAlready, 
       emailCheck, 
       passwordNone, 
       passwordNotmatch,
       passwordCombo,
       passwordCheck} = errMsg;
const {mail, userpass} = userInfo;
let emailValid, passwordValid, passwordConfirmValid = false;

function emailVerify() {
  if(email.nextSibling.className === 'message'){
    email.nextSibling.remove();
  }
  if(!email.value){
  email.classList.add('errbox');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = emailNone;
  email.after(message);
  }
  else if(!text.test(email.value)){
  email.classList.add('errbox');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = emailInvalid;
  email.after(message);  
  }
  else if(email.value === mail){
  email.classList.add('errbox');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = emailAlready;
  email.after(message);  
  }
  else{
    email.classList.remove('errbox');
    emailValid = true;
  }
}


function passwordVerify(){
  if(password.nextSibling.className === 'message'){
    password.nextSibling.remove();
  }
  if(!password.value){
  eye.classList.add('erroreye');
  password.classList.add('errbox');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = passwordNone;
  password.after(message);
  }
  else if(!pass.test(password.value)){
  eye.classList.add('erroreye');
  password.classList.add('errbox');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = passwordCombo;
  password.after(message);  
  }
  else{
    password.classList.remove('errbox');
    eye.classList.remove('erroreye');
    passwordValid = true;
  }
}

function passwordConfirmVerify(){
  if(passwordConfirm.nextSibling.className === 'message'){
    passwordConfirm.nextSibling.remove();
  }
  if(!passwordConfirm.value){
  eye.classList.add('erroreye');  
  passwordConfirm.classList.add('errbox');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = passwordNone;
  passwordConfirm.after(message);
  }
  else if(!pass.test(passwordConfirm.value)){
  eye.classList.add('erroreye');
  passwordConfirm.classList.add('errbox');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = passwordCombo;
  passwordConfirm.after(message);  
  }
  else if(passwordConfirm.value !== password.value){
  eye.classList.add('erroreye');
  passwordConfirm.classList.add('errbox');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = passwordNotmatch;
  passwordConfirm.after(message);  
  }
  else{
    passwordConfirm.classList.remove('errbox');
    eye.classList.remove('erroreye');
    passwordConfirmValid = true;
  }
}

function buttonVerify(){
 if(emailValid === true && passwordValid === true && passwordConfirmValid === true){
  window.location.href = "././folder.html";
 }
}


email.addEventListener('focusout',emailVerify);
password.addEventListener('focusout',passwordVerify);
passwordConfirm.addEventListener('focusout',passwordConfirmVerify);
btn.addEventListener('click',buttonVerify);
document.addEventListener('keyup',function(e){
  if (e.key === 'Enter') {
    if(emailValid === true && passwordValid === true && passwordConfirmValid === true){
      window.location.href = "././folder.html";
     }
}  
});
