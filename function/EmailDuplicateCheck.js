/*기본제공 let userInfo = [{ email: "test@codeit.com", password: "codeit101" }];에서
emailinputValue와 test@codeit.com 비교하여 중복시 오류메시지 표시에 관한 함수*/

import { userInfo, emailInput, emailError } from "../tag.js";
import { emailAddClass } from "../function/AddRemoveFunction.js";

function userDuplicateCheck() {
  let userDuplicate = false;
  for (const user of userInfo) {
    if (user.email === emailInput.value) {
      userDuplicate = true;
    }
    if (userDuplicate) {
      emailError.textContent = "이미 사용 중인 이메일입니다.";
      emailAddClass();
      userDuplicate = false;
      return false;
    } else {
      userDuplicate = true;
      return true;
    }
  }
}

export { userDuplicateCheck };
