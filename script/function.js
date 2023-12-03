function createTag(target, message) {
  //태그 생성
  if (target.nextSibling) {
    return;
  }
  target.classList = "redBorder";
  const span = document.createElement("span");
  span.innerHTML = `${message}`;
  span.classList.add("redMessage");
  target.parentElement.append(span);
}
function removeTag(target) {
  //태그 삭제
  target.classList.toggle("redBorder", 0);
  if (target.nextSibling) {
    target.nextSibling.remove();
  }
}
function checkEmail(str) {
  //이메일 정규식
  const reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
}
function emailDuplicateCheck(str) {
  // 이메일 중복 확인 함수
  return userData.find((el) => el.email === str);
}

export { createTag, removeTag, checkEmail, emailDuplicateCheck };
