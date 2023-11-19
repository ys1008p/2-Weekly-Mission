import { renderErrorMSGNode, removeErrorMSGNode } from "./handleErrorClass.js";

const passwordInputNode = document.querySelectorAll(".signForm_input.password")[0]

function validateEmailOnFocusout(e){
    const emailInput = e.target
    const email = e.target.value;
    if (email === ""){
        renderErrorMSGNode(emailInput, "이메일을 입력해주세요")
        return
    }
    if (!emailInput.validity.valid){
        renderErrorMSGNode(emailInput, "올바른 이메일 주소가 아닙니다.")
        return
    }    
    if (email === "test@codeit.com"){
        renderErrorMSGNode(emailInput, "이미 사용중인 이메일입니다")
        return
    }
    removeErrorMSGNode(emailInput)
};

function validatePasswordOnFocusout(e){
    const passwordInput = e.target
    const password = e.target.value
    if (password === ""){
        renderErrorMSGNode(passwordInput, "비밀번호를 입력해주세요")
        console.log("리스너")
        return
    }
    if (!passwordInput.validity.valid){
        renderErrorMSGNode(passwordInput, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.")
        return
    }
    removeErrorMSGNode(passwordInput)
}

function validatePasswordCheckOnInput(e){
    const password = passwordInputNode.value
    const passwordCheckInput = e.target
    const passwordCheck = e.target.value
    if (!(passwordCheck === password)){
        renderErrorMSGNode(passwordCheckInput, "비밀번호가 일치하지 않아요")
        return
    }
    removeErrorMSGNode(passwordCheckInput)
}

export default {validateEmailOnFocusout, validatePasswordOnFocusout, validatePasswordCheckOnInput}