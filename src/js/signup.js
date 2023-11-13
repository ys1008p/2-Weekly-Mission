let emailValid, passwordValid, confirmPasswordValid;
let signUpValid = emailValid && passwordValid && confirmPasswordValid;

const updatelSignUpValid = () => {
	signUpValid = emailValid && passwordValid && confirmPasswordValid;
};

// 이메일 유효성 검사
const handleEmailInput = () => {
	const emailInput = document.getElementById('emailInput');
	const emailValue = emailInput.value;
	const emailEmptyMessage = document.getElementById('emailEmptyMessage');
	const emailInvalidMessage = document.getElementById('emailInvalidMessage');
	const emailDuplicateMessage = document.getElementById('emailDuplicateMessage');
	// console.log('이메일:', emailValue);

	// 빈칸인지 확인
	if (!emailValue) {
		emailEmptyMessage.style.display = 'block';
		emailInput.classList.add('invalid-input');
	} else {
		emailEmptyMessage.style.display = 'none';
	}

	// 정규식에 부합하는지 확인
	if (emailValue && emailValidCheck(emailValue) === false) {
		emailInvalidMessage.style.display = 'block';
		emailInput.classList.add('invalid-input');
	} else {
		emailInvalidMessage.style.display = 'none';
	}

	// 중복되는 이메일인지 확인
	if (emailValue && isDuplicate(emailValue) === true) {
		emailDuplicateMessage.style.display = 'block';
		emailInput.classList.add('invalid-input');
	} else {
		emailDuplicateMessage.style.display = 'none';
	}

	emailValid = emailValue && emailValidCheck(emailValue) && !isDuplicate(emailValue);
	updatelSignUpValid();

	// invalid-border 관리
	if (emailValid) {
		emailInput.classList.remove('invalid-input');
	}
	// Q. 왜 이건 안되는지? 아래 비밀번호는 이런 형식으로도 정상 동작함.
	// if (emailValue && emailValidCheck(emailValue) === true && !isDuplicate(emailValue) === false) {
	//   emailInput.classList.remove('invalid-input');
	// }
};

// 이메일 정규식 - @ 앞 뒤로 문자 존재, .(콤마) 뒤로 문자 또는 숫자
const emailValidCheck = (email) => {
	const regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

	if (regex.test(email) === false) return false;
	else return true;
};

// 이메일 중복 검사
const isDuplicate = (email) => {
	if (email === 'test@codeit.com') return true;
	else return false;
};

// 비밀번호
const handlePasswordInput = () => {
	const passwordInput = document.getElementById('passwordInput');
	const passwordValue = passwordInput.value;
	const passwordInvalidMessage = document.getElementById('passwordInvalidMessage');
	// console.log('비밀번호:', passwordValue);

	passwordValid = !(passwordValue.length < 8 || passwordValidCheck(passwordValue) === false);
	updatelSignUpValid();

	if (!passwordValid) {
		passwordInvalidMessage.style.display = 'block';
		passwordInput.classList.add('invalid-input');
	} else {
		passwordInvalidMessage.style.display = 'none';
		passwordInput.classList.remove('invalid-input');
	}
};

// 비밀번호 정규식 - 길이 8자 이상, 숫자와 문자 모두 포함
const passwordValidCheck = (password) => {
	const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

	if (regex.test(password) === false) return false;
	else return true;
};

// 비밀번호 확인
const handleConfirmPasswordInput = (e) => {
	const confirmPasswordInput = document.getElementById('confirmPasswordInput');
	const confirmPasswordValue = confirmPasswordInput.value;
	const passwordInput = document.getElementById('passwordInput');
	const passwordValue = passwordInput.value;
	const passwordMismatchMessage = document.getElementById('passwordMismatchMessage');
	// console.log('비밀번호 확인:', confirmPasswordValue);

	confirmPasswordValid = !(passwordValue !== confirmPasswordValue);
	updatelSignUpValid();

	if (!confirmPasswordValid) {
		passwordMismatchMessage.style.display = 'block';
		confirmPasswordInput.classList.add('invalid-input');
	} else {
		passwordMismatchMessage.style.display = 'none';
		confirmPasswordInput.classList.remove('invalid-input');
	}
};

const onClickSignUpButton = (e) => {
	e.preventDefault();
	console.log(signUpValid);

	if (signUpValid) {
		window.location.href = '/folder.html';
	}
};
