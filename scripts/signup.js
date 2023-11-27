import redirectWithAuth from "./modules/redirector.js";
redirectWithAuth("./folder.html")
import {renderErrorMSGNode, removeErrorMSGNode} from "./modules/handleErrorClass.js";
import validator from "./modules/validateSignForm.js"
import togglePasswordHidden from "./modules/toggleBtn.js";

const emailInputNode = document.querySelector(".signForm_input.email")
const passwordInputNode = document.querySelector(".signForm_input.password")
const passwordCheckInputNode = document.querySelector(".signForm_input.password.password-check")
const signForm = document.querySelector(".signForm")
const togglePasswordBtn = document.querySelectorAll(".password_visible")
const postCheckEmail = async (email) => {
    try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email",{
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(email),
        });
        return {status : response.status, ok : response.ok}
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    };
};

const postSignUp = async (payload) => {
    try {
        const responseOfCheckEmail = await postCheckEmail(email_payload)
        if(responseOfCheckEmail.status === 409){
            renderErrorMSGNode(emailInputNode, "이미 사용중인 이메일입니다.")
            return
        }
        if(!responseOfCheckEmail.ok){
            return
        }

        const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up",{
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json()
        const {accessToken} = json.data
        localStorage.setItem("accessToken",JSON.stringify(accessToken)); 
        location.assign("./folder.html")
        return json.data
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    };
};

function handleSubmitSignUp(e){
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password[0].value
    const email_payload = {email}
    const payload = {email, password}

    if ((signForm.querySelector(".error"))){
        return
    } 

    postSignUp(payload)
}

emailInputNode.addEventListener("focusout", validator.validateEmailOnFocusout)
passwordInputNode.addEventListener("focusout", validator.validatePasswordOnFocusout)
passwordCheckInputNode.addEventListener("input", validator.validatePasswordCheckOnInput);
togglePasswordBtn.forEach(btn => {btn.addEventListener("click", togglePasswordHidden)});
signForm.addEventListener("submit", handleSubmitSignUp)