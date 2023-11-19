const login = document.querySelector('.login')
const emailSigninInput = document.getElementById('email');
const passwordSigninInput = document.getElementById('password');
const loginErrorMessage = document.getElementById('error-message');


login.addEventListener('click', function(event) {
  event.preventDefault();
  const emailSigninValue = emailSigninInput.value;
  const passwordSigninValue = passwordSigninInput.value;

  if (emailSigninValue === 'test@codeit.com' && passwordSigninValue === 'codeit101') {
    location.href = 'folder.html';
  }
});