const form = document.querySelector('.sign-middle');
const useremail = document.querySelector('#useremail')
const signUserinput = document.querySelector('.sign-userinput');

// 이메일 타입이 잘못되었는지 확인하는 함수
function emailTypeChacking (useremail){
  const exptext = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if(exptext.test(useremail) === false){
  //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
  errPaint('올바른 이메일 주소가 아닙니다')
  return false;
  }
}

// 에러문구 표기 함수
function errPaint(massage){
  const p = document.createElement('p');
  p.innerText = massage;
  p.classList.add('input-err')
  signUserinput.appendChild(p);
  useremail.value = ""
  useremail.focus();
}

// 메일 이상 유무 체크
function chackingEmail () {
  if (useremail.nextSibling){
    useremail.nextSibling.remove();
  }
  if (!useremail.value){
    errPaint('이메일을 입력해주세요');
  } else if (useremail.value === 'test@codeit.com'){
    errPaint('이미 사용중인 이메일입니다');
  } else{
    emailTypeChacking(useremail.value);
  }   
}

form.addEventListener('focusout', chackingEmail);