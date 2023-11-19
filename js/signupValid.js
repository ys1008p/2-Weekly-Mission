import { formState as signupState } from "./signup.js";

export const validObject = {
  ifError: function (e, errorText, errorMsg, input) {
    e.target.classList.add("error");
    errorText.classList.add("error");
    errorText.innerHTML = `${errorMsg}`;
    signupState[`${input}`]["isValid"] = false;
  },
  ifOk: function (e, errorText, input) {
    e.target.classList.remove("error");
    errorText.classList.remove("error");
    errorText.innerHTML = "";
    signupState[`${input}`]["isValid"] = true;
  },
};
