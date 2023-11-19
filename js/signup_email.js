const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

emailInput.addEventListener('blur', function() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    emailInput.classList.add('error');
    errorMessage.innerText = '이메일을 입력해주세요.';
    errorMessage.style.display = 'block';
  } else if (!isValidEmail(emailValue)) {
    emailInput.classList.add('error');
    errorMessage.innerText = '올바른 이메일 주소가 아닙니다.';
    errorMessage.style.display = 'block';
  } else if (emailValue === 'test@codeit.com') {
    emailInput.classList.add('error');
    errorMessage.innerText = '이미 사용 중인 이메일입니다.';
    errorMessage.style.display = 'block';
  } else {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
  }
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}