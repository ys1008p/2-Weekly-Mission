import {renderErrorMSGNode, removeErrorMSGNode} from "./modules/handleErrorClass.js";
import validator from "./modules/validateSignForm.js"
import togglePasswordHidden from "./modules/toggleBtn.js";

const emailInputNode = document.querySelector(".signForm_input.email")
const passwordInputNode = document.querySelectorAll(".signForm_input.password")[0]
const signForm = document.querySelector(".signForm")
const togglePasswordBtn = document.querySelectorAll(".password_visible")

function handleSubmitSignIn(e){
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    if (email === "test@codeit.com" && password ==="codeit101"){
        location.assign("./folder.html")
    }
    else {
        removeErrorMSGNode(emailInputNode)
        removeErrorMSGNode(passwordInputNode)
        renderErrorMSGNode(emailInputNode, "이메일을 확인해주세요")
        renderErrorMSGNode(passwordInputNode, "비밀번호를 확인해주세요")
    }
}


emailInputNode.addEventListener("focusout", validator.validateEmailOnFocusout)
passwordInputNode.addEventListener("focusout", validator.validatePasswordOnFocusout)
togglePasswordBtn.forEach(btn => {btn.addEventListener("click", togglePasswordHidden)});
signForm.addEventListener("submit", handleSubmitSignIn)