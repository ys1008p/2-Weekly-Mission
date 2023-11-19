// import하면 함수들 declared but its value is never read 메세지 뜨면서 기능 동작 안함.
// import { TEST_EMAIL, TEST_PASSWORD } from '../util/constants';

if (localStorage.getItem('accessToken')) {
	window.location.href = '/folder.html';
}

const testEmail = 'test@codeit.com';
const testPassword = 'sprint101';

let inputValue = {
	email: '',
	password: '',
};

let isEmailCorrect = false;
let isPasswordCorrect = false;
let isPossibleSignIn = isEmailCorrect && isPasswordCorrect;

const updateSignInValid = () => {
	isPossibleSignIn = isEmailCorrect && isPasswordCorrect;
};

const handleEmailInput = () => {
	const emailInput = document.getElementById('emailInput');
	const emailValue = emailInput.value;

	if (emailValue === testEmail) {
		isEmailCorrect = true;
	} else {
		isEmailCorrect = false;
	}

	updateSignInValid();
};

const handlePasswordInput = () => {
	const passwordInput = document.getElementById('passwordInput');
	const passwordValue = passwordInput.value;

	if (passwordValue === testPassword) {
		isPasswordCorrect = true;
	} else {
		isPasswordCorrect = false;
	}

	updateSignInValid();
};

const fetchSignIn = async (inputValue) => {
	const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
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
};

const onClickSignInButton = async (e) => {
	e.preventDefault();

	const emailIncorrectMessage = document.getElementById('emailIncorrectMessage');
	const passwordIncorrectMessage = document.getElementById('passwordIncorrectMessage');
	const passwordEmptyMessage = document.getElementById('passwordEmptyMessage');

	const emailInput = document.getElementById('emailInput');
	const emailValue = emailInput.value;
	const passwordInput = document.getElementById('passwordInput');
	const passwordValue = passwordInput.value;

	emailIncorrectMessage.style.display = 'none';
	emailInput.classList.remove('invalid-input');
	passwordIncorrectMessage.style.display = 'none';
	passwordInput.classList.remove('invalid-input');
	passwordEmptyMessage.style.display = 'none';

	inputValue = {
		email: emailValue,
		password: passwordValue,
	};

	if (isPossibleSignIn) {
		try {
			fetchSignIn(inputValue);
		} catch (error) {
			console.log('error:', error);
		}
	}

	if (!isEmailCorrect) {
		emailIncorrectMessage.style.display = 'block';
		emailInput.classList.add('invalid-input');
	}

	if (!isPasswordCorrect) {
		if (!passwordValue) {
			passwordEmptyMessage.style.display = 'block';
			passwordInput.classList.add('invalid-input');
		} else {
			passwordIncorrectMessage.style.display = 'block';
			passwordInput.classList.add('invalid-input');
		}
	}
};
