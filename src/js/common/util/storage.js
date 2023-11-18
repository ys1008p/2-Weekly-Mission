const accessToken = localStorage.getItem("accessToken");

/**
 * Token 검증 함수
 */
function accessTokenValid() {
  if (accessToken) {
    window.location.href = "/folder.html";
  }
}

export { accessTokenValid };
