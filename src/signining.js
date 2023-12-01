async function idCheck(e) {
  e.preventDefault ();

  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value
  const login = {
    email,
    password,
  }

  const post = await fetch(('https://bootcamp-api.codeit.kr/api/sign-in'),{
    method: 'post',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(login),
  });

  if (post.ok){
    window.location.href = "./folder/"
  }
  else{
    const emailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.passwordError');

    emailError.textContent = '이메일을 확인해주세요.'
    emailError.classList.add('inputError')
    emailInput.classList.add('inputErrorBorder')

    passwordError.textContent = '비밀번호를 확인해주세요.'
    passwordError.classList.add('inputError')
    passwordInput.classList.add('inputErrorBorder')
  }
}


const logining = document.querySelector('#signinning');

logining.addEventListener('click', idCheck);
