import makeDOM from "./makeDOM.js";

const showError = (inputElement, message) => {
  if(inputElement.parentNode.lastChild.className === 'error-message'){
    inputElement.parentNode.lastChild.innerText = message;
  } else {
    const errorMessage = makeDOM('p', {
      className: `error-message`,
      innerText: message
    });
    inputElement.parentNode.appendChild(errorMessage);
    inputElement.classList.add('input--error');
  }
};

export default showError;
