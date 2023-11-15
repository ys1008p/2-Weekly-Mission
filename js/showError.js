import makeDOM from "./makeDOM.js";

const showError = (tag, message) => {
  if(tag.parentNode.lastChild.className === 'error-message'){
    tag.parentNode.lastChild.innerText = message;
  } else {
    const errorMessage = makeDOM('p', {
      className: `error-message`,
      innerText: message
    });
    tag.parentNode.appendChild(errorMessage);
    tag.classList.add('input--error');
  }
};

export default showError;
