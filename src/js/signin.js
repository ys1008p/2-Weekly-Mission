let isEmailCorrect = false;
let isPasswordCorrect = false;
let isPossibleSignIn = isEmailCorrect && isPasswordCorrect;

const updateSignInValid = () => {
	isPossibleSignIn = isEmailCorrect && isPasswordCorrect;
};

const handleEmailInput = () => {
	const emailInput = document.getElementById('emailInput');
	const emailValue = emailInput.value;

	if (emailValue === 'test@codeit.com') {
		isEmailCorrect = true;
	} else {
		isEmailCorrect = false;
	}

	updateSignInValid();
};

const handlePasswordInput = () => {
	const passwordInput = document.getElementById('passwordInput');
	const passwordValue = passwordInput.value;
	const passwordEmptyMessage = document.getElementById('passwordEmptyMessage');

	if (!passwordValue) {
		passwordEmptyMessage.style.display = 'block';
		passwordInput.classList.add('invalid-input');
	} else {
		passwordEmptyMessage.style.display = 'none';
		passwordInput.classList.remove('invalid-input');
	}

	if (passwordValue === 'codeit101') {
		isPasswordCorrect = true;
	} else isPasswordCorrect = false;

	updateSignInValid();
};

const onClickSignInButton = (e) => {
	e.preventDefault();
	console.log(isPossibleSignIn);

	const emailIncorrectMessage = document.getElementById('emailIncorrectMessage');
	const passwordIncorrectMessage = document.getElementById('passwordIncorrectMessage');

	if (isPossibleSignIn) {
		window.location.href = '/folder.html';
	} else {
		if (!isEmailCorrect) {
			emailIncorrectMessage.style.display = 'block';
			emailInput.classList.add('invalid-input');
		} else {
			emailIncorrectMessage.style.display = 'none';
			emailInput.classList.remove('invalid-input');
		}
		if (!isPasswordCorrect) {
			passwordIncorrectMessage.style.display = 'block';
			passwordInput.classList.add('invalid-input');
		} else {
			passwordIncorrectMessage.style.display = 'none';
			passwordInput.classList.remove('invalid-input');
		}
	}
};
