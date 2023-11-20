const useremail = document.querySelector('#useremail')
const signInputEmail = document.querySelector('.sign-input-email');

// 이메일 타입이 잘못되었는지 확인하는 함수
function checkEmailType (useremail){
  const exptext = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if(exptext.test(useremail) === false){
  //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
  errPaint('올바른 이메일 주소가 아닙니다', signInputEmail)
  return false;
  }
}

// 에러문구 표기 함수
function errPaint(message, parent){
  const p = document.createElement('p');
  p.innerText = message;
  p.classList.add('input-err');
  parent.appendChild(p);
}

// 메일 이상 유무 체크
function checkEmail () {
  // 에러코드 중복 방지
  if (useremail.nextSibling){
    useremail.nextSibling.remove();
  }
  if (!useremail.value){
    errPaint('이메일을 입력해주세요', signInputEmail);
  } else if (useremail.value === 'test@codeit.com'){
    errPaint('이미 사용중인 이메일입니다', signInputEmail);
  } else{
    checkEmailType(useremail.value);
  }   
}


const password = document.querySelector('#password');
const signInputPassword = document.querySelector('.sign-input-password');

// 비밀번호 타입이 잘못되었는지 확인하는 함수
function checkPasswordType (password){
  //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
  const exptext = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if(exptext.test(password) === false){
  errPaint('비밀번호는 영문,숫자 조합 8자 이상 입력해주세요.', signInputPassword)
  return false;
  }
}


function checkPassword () {
  // 에러코드 중복 방지
  if (signInputPassword.lastChild.tagName === "P"){
    signInputPassword.lastChild.remove();
  }  
  if (!password.value){
    errPaint('비밀번호를 입력해주세요', signInputPassword);
  } else{
    checkPasswordType(password.value);
  } 
}


const password2 = document.querySelector('#password2');
const signInputPassword2 = document.querySelector('.sign-input-password2');

function doubleCheckPassword(){
  // 에러코드 중복 방지
  if (signInputPassword2.lastChild.tagName === "P"){
    signInputPassword2.lastChild.remove();
  }
  if (password.value !== password2.value){
    errPaint('비밀번호가 일치하지 않아요', signInputPassword2);
  }
}

// 로그인, 회원가입
const signForm = document.querySelector('.sign-middle');

function submitForm (e) {
  e.preventDefault();
  if (useremail.value && (password.value || password2.value)){
    if (signInputEmail.lastChild.tagName !== "P" && (signInputPassword.lastChild.tagName !== "P" || signInputPassword2.lastChild !== "P")){
      location.href = "/folder";
      return; 
    }
  }
  if (useremail.value === 'test@codeit.com' && password.value === 'codeit101'){
    location.href = "/folder";
    return;
  }
}



useremail.addEventListener('focusout', checkEmail);
password.addEventListener('focusout', checkPassword);

signForm.addEventListener('submit', submitForm);
password2.addEventListener('focusout', doubleCheckPassword);
