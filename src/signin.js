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
  else{
    email.classList.remove('errbox');
  }
}


function passwordVerify(){
  if(password.nextSibling.className === 'message'){
    password.nextSibling.remove();
  }
  if(!password.value){
  password.classList.add('errbox');
  eye.classList.add('erroreye');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = passwordNone;
  password.after(message);
  }
  else if(!pass.test(password.value)){
  password.classList.add('errbox');
  eye.classList.add('erroreye');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = passwordCombo;
  password.after(message);  
  }
  else{
    password.classList.remove('errbox');
    eye.classList.remove('erroreye');
  }
}

function buttonVerify(){
  if(email.nextSibling.className === 'message'|| password.nextSibling.className === 'message'){
    password.nextSibling.remove();
    email.nextSibling.remove();
  }
   
 if(email.value === mail && password.value === userpass){
  window.location.href = "././folder.html";
 }
 else if(email.value !== mail || password.value !== userpass){
  email.classList.add('errbox');
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = emailCheck;
  email.after(message);

  password.classList.add('errbox');
  const message2 = document.createElement('div');
  message2.classList.add('message');
  message2.textContent = passwordCheck;
  password.after(message2);    
 }
 else{
  email.classList.remove('errbox');
  password.classList.remove('errbox');
}
}

function eyehendle(){
  
}

email.addEventListener('focusout',emailVerify);
password.addEventListener('focusout',passwordVerify);
btn.addEventListener('click',buttonVerify);