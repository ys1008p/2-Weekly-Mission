// week5 요구사항 변경(api를 이용한 이메일 중복)으로 인해
// isEmailDuplicate와 관련된 모든 함수 미사용

// import { EMAIL_REGEX } from '../util/constants';

if (localStorage.getItem('accessToken')) {
	window.location.href = '/folder.html';
}

const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

let emailValid = false;
let passwordValid = false;
let confirmPasswordValid = false;
let signUpValid = emailValid && passwordValid && confirmPasswordValid;

const updatelSignUpValid = () => {
	signUpValid = emailValid && passwordValid && confirmPasswordValid;
};

let inputValue = {
	email: '',
	password: '',
};

// 이메일 유효성 검사
const handleEmailInput = () => {
	const emailInput = document.getElementById('emailInput');
	const emailValue = emailInput.value;
	const emailEmptyMessage = document.getElementById('emailEmptyMessage');
	const emailInvalidMessage = document.getElementById('emailInvalidMessage');
	// const emailDuplicateMessage = document.getElementById('emailDuplicateMessage');

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
	// if (emailValue && isEmailDuplicate(emailValue) === true) {
	//   emailDuplicateMessage.style.display = 'block';
	//   emailInput.classList.add('invalid-input');
	// } else {
	//   emailDuplicateMessage.style.display = 'none';
	// }

	emailValid = emailValue && emailValidCheck(emailValue);
	updatelSignUpValid();

	// invalid-border 관리
	if (emailValid) {
		emailInput.classList.remove('invalid-input');
	}
};

// 이메일 정규식 - @ 앞 뒤로 문자 존재, .(콤마) 뒤로 문자 또는 숫자
const emailValidCheck = (email) => {
	if (emailRegex.test(email) === false) return false;
	else return true;
};

// 이메일 중복 검사
// const isEmailDuplicate = (email) => {
//   if (email === 'test@codeit.com') return true;
//   else return false;
// };

// 비밀번호
const handlePasswordInput = () => {
	const passwordInput = document.getElementById('passwordInput');
	const passwordValue = passwordInput.value;
	const passwordInvalidMessage = document.getElementById('passwordInvalidMessage');

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
	if (passwordRegex.test(password) === false) return false;
	else return true;
};

// 비밀번호 확인
const handleConfirmPasswordInput = (e) => {
	const confirmPasswordInput = document.getElementById('confirmPasswordInput');
	const confirmPasswordValue = confirmPasswordInput.value;
	const passwordInput = document.getElementById('passwordInput');
	const passwordValue = passwordInput.value;
	const passwordMismatchMessage = document.getElementById('passwordMismatchMessage');

	confirmPasswordValid = passwordValue === confirmPasswordValue;
	updatelSignUpValid();

	if (!confirmPasswordValid) {
		passwordMismatchMessage.style.display = 'block';
		confirmPasswordInput.classList.add('invalid-input');
	} else {
		passwordMismatchMessage.style.display = 'none';
		confirmPasswordInput.classList.remove('invalid-input');
	}
};

const checkEmail = async (email) => {
	const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(email),
	});

	if (response.status === 200) {
		return true;
	} else {
		return false;
	}
};

const fetchSignUp = async (inputValue) => {
	if (checkEmail) {
		const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(inputValue),
		});

		const result = await response.json();
		const data = result.data;
		const accessToken = data.accessToken;

		if (response.status === 200) {
			localStorage.setItem('accessToken', accessToken);
			window.location.href = '/folder.html';
		}
	}
};

const onClickSignUpButton = (e) => {
	e.preventDefault();

	const emailInput = document.getElementById('emailInput');
	const emailValue = emailInput.value;
	const passwordInput = document.getElementById('passwordInput');
	const passwordValue = passwordInput.value;

	inputValue.email = emailValue;
	inputValue.password = passwordValue;

	if (signUpValid) {
		fetchSignUp(inputValue);
	}
};
