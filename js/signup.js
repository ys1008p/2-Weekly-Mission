const email = document.getElementById("email");
const pw = document.getElementById("pw");

function emailNullError() {
  if (email.value == "") {
    email.classList.add("error-input");
    email.nextElementSibling.classList.add("display");
    email;
  } else {
    email.classList.remove("error-input");
    email.nextElementSibling.classList.remove("display");
  }
}

email.addEventListener("focusout", emailNullError);
