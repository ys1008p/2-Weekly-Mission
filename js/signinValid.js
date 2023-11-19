export const validObject = {
  ifError: function (e, errorText, errorMsg, input) {
    if (typeof e.target !== "undefined") e.target.classList.add("error");
    input.classList.add("error");
    errorText.classList.add("error");
    errorText.innerHTML = `${errorMsg}`;
  },
  ifOk: function (e, errorText, input) {
    e.target.classList.remove("error");
    errorText.classList.remove("error");
    errorText.innerHTML = "";
  },
};
