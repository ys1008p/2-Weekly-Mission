const inputEmail = document.querySelector('#useremail');
const inputPwd = document.querySelector('#userpassword');
// const btn = document.querySelector()
const okLogin = {"test@codeit.com" : "codeit101"};
console.log(inputEmail.nextSibling);
console.log(inputEmail.nextElementSibling);


function createRedMessage(inputBox, notice) {
  inputBox.classList.add("redBox");
  const div = document.createElement('div');
  div.textContent = notice;
  div.classList.add("message");
  inputBox.after(div);
}

function errMsg(inputBox) {
  if(inputBox.nextsibling.className == "message") {
    inputBox.nextsibling.remove();
    inputBox.classList.remove("redBox");
  }
}


function nonEmail() {
  createRedMessage(inputEmail, "이메일을 입력해주세요.");
}

function checkEmail() {
  createRedMessage(inputEmail, "이메일을 확인해주세요.")
}

function nonPassWord() {
  createRedMessage(inputPwd, "비밀번호를 입력해주세요.")
}
function checkPassWord() {
  createRedMessage(inputPwd, "비밀번호를 확인해주세요.")
}
//비밀번호 만들기

function factPwd(e) {
  const emailValue = inputEmail.value;
  const passwordValue = inputPwd. value;

  // errMsg(inputPwd);

  if(!passwordValue) {
    nonPassWord();
  } else if (e.type === "click") {
    okLogin[emailValue] === passwordValue
    ? window.open("/folder", "_self")
    : checkPassWord();
  }

}



function factEmail(event) {
  const emailValue = inputEmail.value;
  const passwordValue = inputPwd.value;
  // errMsg(inputEmail);
  if(!emailValue) {
    nonEmail();
    
  } else if (event.type === "click") {
    okLogin[emailValue] === passwordValue
    ? window.open("/folder", "_self")
    : checkEmail();
  }
}






inputEmail.addEventListener("focusout", factEmail);
inputPwd.addEventListener("focusout", factPwd);

// ------------하은 참고 내용---------------//

// removeRedMessage(inputEmail);
// function removeRedMessage(inputBox) {
//   if (inputBox.nextSibling.className == "message") {
//     inputBox.nextSibling.remove();
//     inputBox.classList.remove("redBox");
//   }
// }


// const inputEmail = document.querySelector("#useremail");
// const inputPassword = document.querySelector("#password");
// const inputPasswordCheck = document.querySelector("#password-check");
// const btn = document.querySelector(".sign-button");
// const eyeBtn = document.querySelectorAll(".eye-button");


// function printEmpty() {
//   createRedMessage(inputEmail, "이메일을 입력해주세요.");
// }

// const parInput = document.querySelector('.emaillPwGap');
// const inputs = parInput.querySelectorAll('input')

// let nonEmaillText = document.createElement('p');
// nonEmaillText.classList.add('emaillNoneErr')
// nonEmaillText.textContent = '이메일을 입력해 주세요'
// console.log(inputs[0])
// console.log(inputs[1])

// function nonTextEmail () {
//   const emailValue = inputs[0].value;
//   console.log(emailValue)
//   const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
//   if(emailValue === '') {
//     inputs[0].style.border = '1px solid red';
//     inputs[0].after(nonEmaillText);
//   } else if (emailValue === 'test@codeit.com') {
//      inputs[0].style.border = '1px solid red';
//     nonEmaillText.textContent = '이미 사용 중인 이메일입니다.'
//   }
// }

// function nonTextPW () {
//   const passWord = inputs[1].value;
//   if(8 > passWord.length) {
//     if(typeof inputs[1].value === 'string' || typeof inputs[1].value === 'number') {
//       const nonPassWord = nonEmaillText.textContent;
//       nonPassWord.textContent = '비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.'
//       inputs[1].style.border = '1px solid red';
//       inputs[1].after(nonPassWord);
      
//     }
//   }

// }


// inputs[0].addEventListener('focusout', nonTextEmail)
// inputs[1].addEventListener('focusout', nonTextPW);