const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const errorMessageList = {
  empty: {
    email: "이메일을 입력해주세요",
    password: "비밀번호를 입력해주세요",
  },
  valid: {
    email: "올바른 이메일 주소가 아닙니다.",
    password: "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.",
  },
  incorrect: {
    email: "이메일을 확인해주세요",
    password: "비밀번호를 확인해주세요",
  },
};

const validList = {
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

const sampleUserList = {
  email: "test@codeit.com",
  password: "codeit101",
};

function createErrorMessage(target, msg) {
  const errorMsg = document.createElement('p');
  errorMsg.className = 'errorMsg';
  errorMsg.textContent = msg;

  const existingErrorMsg = target.parentNode.querySelector('.errorMsg');
  if(existingErrorMsg) {
    existingErrorMsg.remove();
  }

  target.after(errorMsg);
}

function showErrorMsg({target}) {
  const {value, name} = target;

  if (value.trim() === '') {
    createErrorMessage(target, errorMessageList.empty[name]);
    target.classList.add('inputError');
    return;
  }
  if (!validList[name].test(value)) {
    createErrorMessage(target, errorMessageList.valid[name]);
    target.classList.add('inputError');
    return;
  }
  if (value.trim() !== sampleUserList[name]) {
    createErrorMessage(target, errorMessageList.incorrect[name]);
    target.classList.add('inputError');
    return;
  }

  target.classList.remove('inputError');
  target.nextElementSibling.remove();
}

emailInput.addEventListener("focusout", showErrorMsg);
passwordInput.addEventListener("focusout", showErrorMsg);


const togglePwdButton = document.getElementById('togglePwd');

function togglePasswordVisibility() {
  const isPasswordType = passwordInput.type === "password"
  
   togglePwdButton.setAttribute(
    "src",
    `../img/eye-${isPasswordType ? "on" : "off"}.svg`
    );

    passwordInput.setAttribute("type", `${isPasswordType ? "text" : "password"}`);
}

togglePwdButton.addEventListener('click', function () {
  togglePasswordVisibility();
});

const loginButton = document.getElementById('loginButton');

function loginSubmit(event) {
  event.preventDefault();
  const isSampleUser = emailInput.value === sampleUserList.email && passwordInput.value === sampleUserList.password;
  if(isSampleUser){
    location.href = '../folder.html';
    return;
  } else {
    showErrorMsg({ target: emailInput });
    showErrorMsg({ target: passwordInput });
  }
}

loginButton.addEventListener("click", loginSubmit);