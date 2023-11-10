// 이메일 input에서 focus out 할 때, 값이 없을 경우 input에 빨강색 테두리와
// 아래에 “이메일을 입력해주세요.” 빨강색 에러 메세지가 보입니다
// const emailInput = document.getElementsByClassName("username");

// const email_input = document.getElementByClassName("username");
const email_input = document.querySelector("#username");
const email_error_text = document.querySelector(".email_error_text");

function checkEmail() {
  console.log("d");
  if (email_input.value === "") {
    email_input.classList.add("inputError");
    console.log("여기");
    email_error_text.innerHTML = "이메일을 입력해주세요.";
  }
}

email_input.addEventListener("focusout", checkEmail);

// function checkEmail() {
//   console.log(email_input.outerHTML);
// }

// email_input.addEventListener("click", checkEmail);

// 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 input에 빨강색 테두리와 아래에
// “올바른 이메일 주소가 아닙니다.” 빨강색 에러 메세지가 보입니다
// 이메일 input에서 focus out 일 때, input 값이 test@codeit.com 일 경우 input에 빨강색 테두리와 아래에 “이미 사용 중인 이메일입니다.” 빨강색 에러 메세지가 보입니다.

// 비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, input에 빨강색 테두리와 아래에 “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 빨강색 에러 메세지가 보입니다.
// 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input에 빨강색 테두리와 아래에 “비밀번호가 일치하지 않아요.” 빨강색 에러 메세지가 보입니다.

// 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 빨강색 테두리와 에러 메세지가 보입니다.
// 이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.
// 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도경우, “/folder” 페이지로 이동합니다.

// 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지가 보입니다.
// 이외의 로그인 시도의 경우 이메일, 비밀번호 input에 빨강색 테두리와 각각의 input아래에 “이메일을 확인해주세요.”, “비밀번호를 확인해주세요.” 빨강색 에러 메세지가 보입니다.

// 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 됩니다.

// 이메일, 비밀번호 input에 에러 관련 디자인을 Components 영역의 에러 케이스로 적용합니다.

//심화 요구사항
// 눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
// 비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.
// 로그인, 회원가입 페이지에 공통적으로 사용하는 로직이 있다면,반복하지 않고 공통된 로직을 모듈로 분리해 사용합니다
