import {inputFocusOutCheckHandler, TestloginButtonClickCheckHandler} from './SignUtility.js';

const inputFormInputs = document.querySelectorAll(`.input-form__input`);
for(const inputFormInput of inputFormInputs){
    inputFormInput.addEventListener('focusout', inputFocusOutCheckHandler);
}

const loginButton = document.querySelector(`.action-button_signin`);
loginButton.addEventListener('click', TestloginButtonClickCheckHandler);