const deleteError = (inputElement) => {
  inputElement.classList.remove('input--error');
  const parentElement = inputElement.parentNode;
  const errorMessageElement = parentElement.querySelector('.error-message');
  if(errorMessageElement) errorMessageElement.remove();
}

export default deleteError;
