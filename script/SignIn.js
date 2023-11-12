import {SignInButtonError, inputError} from './SignErrorEventHandler.js';

function nothingErrorCheck(element){
    const inputContent= element.value;
    
    if(inputContent === null){
        throw TypeError;
    }

    if(inputContent.trim().length !== 0){
        return false;
    }

    return true;
}

function invalidEmailErrorCheck(element){
    const inputContent= element.value;
    const reg_email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if(inputContent === null){
        throw TypeError;
    }

    if(!reg_email.test(inputContent)){
        return true;
    }

    return false;
}

function testloginCheck(idInput, pwInput){

    const idInputContent= idInput.value;
    const pwInputContent= pwInput.value;
                                           
    if(idInputContent === null || pwInputContent === null){
        throw TypeError;
    }

    if(idInputContent === "test@codeit.com" && pwInputContent === "codeit101"){
        location.replace("./folder.html");
        return false;
    }

    return true;
}

const errorComments = {
    "nothing-email": "이메일을 입력해주세요.",
    "invalid-email": "올바른 이메일 주소가 아닙니다.",
    "check-email": "이메일을 확인해주세요.",
    "nothing-password": "비밀번호를 입력해주세요.",
    "check-password": "비밀번호를 확인해주세요",
}


const InputFormInputEmail = document.querySelector(`.input-form__input#signin-email`);
const InputFormInputPassword = document.querySelector(`.input-form__input#signin-password`);

const errorDesign = "input-form__input_error";

InputFormInputEmail.addEventListener('focusout', (event) =>{
    inputError(event, nothingErrorCheck, errorDesign, errorComments["nothing-email"])});
InputFormInputEmail.addEventListener('focusout', (event) =>{
    inputError(event, invalidEmailErrorCheck, errorDesign, errorComments["invalid-email"])});
InputFormInputPassword.addEventListener('focusout', (event) =>{
    inputError(event, nothingErrorCheck, errorDesign, errorComments["nothing-password"])});


const InputFormButton = document.querySelector(`.action-button_signin`);
console.log(InputFormButton)

InputFormButton.addEventListener('click', (event)=>{
    SignInButtonError(event, InputFormInputEmail, InputFormInputPassword,
        testloginCheck, errorDesign,
        errorComments["check-email"], errorComments["check-password"]);
})