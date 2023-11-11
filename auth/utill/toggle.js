document.querySelectorAll(".eye-button").forEach((button) => {
  button.addEventListener("click", function () {
    const input = this.previousElementSibling;
    const img = this.querySelector("img");

    if (input.type === "password") {
      input.type = "text";
      img.src = "../images/eye-on.svg";
    } else {
      input.type = "password";
      img.src = "../images/eye-off.svg";
    }
  });
});
