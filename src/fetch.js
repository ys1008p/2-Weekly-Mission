// 로그인 정보 담은 객체 생성
const signInInfo = {
  email: "test@codeit.com",
  password: "sprint101",
};

// POST 요청하기
// 성공: access token 저장 - folder로 이동
// 실패: 에러
fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(signInInfo),
})
  .then((response) => response.json())
  .then((response) => {
    if (!isExistEmail(response.email)) {
      localStorage.setItem("access-token", accessToken);
    } else {
      //에러 발생 시키기
      throw new Error("This email already exists.");
    }
  })
  .then(() => {
    location.href = "../folder.html";
  })
  .catch((error) => {
    alert(error);
  });

// 이메일 중복 확인
function isExistEmail(email) {
  return true;
}
