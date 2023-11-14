export const setErrorMessage = (inputElement, textElement, errorMessage) => {
  inputElement.classList.add('error');
  textElement.textContent = errorMessage;
  textElement.classList.remove('hidden');
};

export const removeErrorMessage = (inputElement, textElement) => {
  inputElement.classList.remove('error');
  textElement.classList.add('hidden');
};
