export function signinApi(userId, userPassword) {
  fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userId,
      password: userPassword,
    }),
  })
    .then(response => {
      if (response.status === 200) {
        window.location.href = '/folder.html';
      } else if (response.status === 400) {
        throw new Error('없는 정보입니다. 아이디와 비밀번호를 확인해주세요.');
      }
    })
    .catch(error => {
      console.log(error.message);
    });
}
