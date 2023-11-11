const form = document.querySelector('.sign-middle');
const useremail = document.querySelector('#useremail')
const signInputEmail = document.querySelector('.sign-input-email');
const password = document.querySelector('#password');
const signInputPassword = document.querySelector('.sign-input-password');

// 이메일 타입이 잘못되었는지 확인하는 함수
function emailTypeChacking (useremail){
  const exptext = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if(exptext.test(useremail) === false){
  //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
  errPaint('올바른 이메일 주소가 아닙니다', signInputEmail, useremail)
  return false;
  }
}

// 에러문구 표기 함수
function errPaint(massage, append, signInput){
  const p = document.createElement('p');
  p.innerText = massage;
  p.classList.add('input-err')
  append.appendChild(p);
  signInput.value = ""
}

// 메일 이상 유무 체크
function chackingEmail () {
  // 에러코드 중복 방지
  if (useremail.nextSibling){
    useremail.nextSibling.remove();
  }
  if (!useremail.value){
    errPaint('이메일을 입력해주세요', signInputEmail, useremail);
  } else if (useremail.value === 'test@codeit.com'){
    errPaint('이미 사용중인 이메일입니다', signInputEmail, useremail);
  } else{
    emailTypeChacking(useremail.value);
  }   
}

// 비밀번호 타입이 잘못되었는지 확인하는 함수
function passwordTypeChacking (password){
  const exptext = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if(exptext.test(password) === false){
  //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
  errPaint('비밀번호는 영문,숫자 조합 8자 이상 입력해주세요.', signInputPassword, password)
  return false;
  }
}

// 비밀번호 이상 유무 체크
function chackingPassword () {
  // 에러코드 중복 방지
  if (password.parentNode.childNodes[7]){
    password.parentNode.childNodes[7].remove();
  }  
  if (!password.value){
    errPaint('비밀번호를 입력해주세요', signInputPassword, password);
  } else{
    passwordTypeChacking(password.value);
  } 
}

useremail.addEventListener('focusout', chackingEmail);
password.addEventListener('focusout', chackingPassword);