async function signupDuplicationCheck(e) {
  e.preventDefault ();
console.log('damn')
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value
  const login = {
    email,
    password,
  }
  const emailDuplication = document.querySelector('.emailDuplication');
  const passwordLength = document.querySelector('.passwordLength');
  const passwordSameError = document.querySelector('.passwordSame');
  const canI =
    emailDuplication.classList.contains('inputError')
    ||passwordLength.classList.contains('inputError')
    ||passwordSameError.classList.contains('inputError');

  const post = await fetch(('https://bootcamp-api.codeit.kr/api/check-email'),{
    method: 'post',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(login),
  });

  if (post.ok){
    if (!canI){
    window.location.href = "./folder/"
    }
    else{
      alert('비밀번호를 다시 확인해주세요.');
  }
  }
  else{
    alert('존재하는 Email입니다!');
}
}

const logining = document.querySelector('#signUpping');

logining.addEventListener('click', signupDuplicationCheck);
