const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');
const inputEmail = document.querySelector('#login-email__input');
const inputPassword = document.querySelector('#login-password__input');
const loginButton = document.querySelector('#login-page-button')
const passwordIcon = document.querySelector('.password-icon')

let isLogin ={
    email: false,
    password: false
}
let passwordWitch=false;

let span = document.createElement('span');
let div = document.createElement('div');
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function emailFocus(e){
    if(e.target.value === ""){
        isLogin.email=false
        inputEmail.classList.add('alert-line');
        div.innerHTML = "이메일을 입력해주세요.";
        email.appendChild(div);  
        div.classList.add('email-alert-text');
    }else if (!emailRegex.test(inputEmail.value)){
        isLogin.email=false
        inputEmail.classList.add('alert-line');
        div.innerHTML = "올바른 이메일 주소가 아닙니다.";
        email.appendChild(div);  
        div.classList.add('email-alert-text');
    }else{
        isLogin.email=true
        inputEmail.classList.remove('alert-line');
        e.target.nextElementSibling.remove()
    }
        
}

function passwordFocus(e){
    if(inputPassword.value === ""){ 
        isLogin.password = false
        inputPassword.classList.add('alert-line');
        span.innerHTML = "비밀번호를 입력해주세요.";
        password.appendChild(span);
        span.classList.add('password-alert-text');
    }else if((!passwordRegex.test(inputPassword.value))){
        isLogin.password = false
        inputPassword.classList.add('alert-line');
        span.innerHTML = "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.";
        password.appendChild(span);
        span.classList.add('password-alert-text');
    }else{
        isLogin.password = true
        inputPassword.classList.remove('alert-line');
        e.currentTarget.parentElement.nextElementSibling.remove()
    }
}

function login(e) {
    e.preventDefault();
    if (isLogin.email && isLogin.password) {
        window.location.href = "../folder.html";
    }else{
        if(!isLogin.email){
            inputEmail.classList.add('alert-line');
            div.innerHTML = "이메일을 확인해주세요.";
            div.classList.add('email-alert-text');
            email.appendChild(div);  
        }
        if(!isLogin.password){
            inputPassword.classList.add('alert-line');
            span.innerHTML = "비밀번호를 확인해주세요.";
            password.appendChild(span);
            span.classList.add('password-alert-text');
         }
    }
}

function onPassword(){
        passwordWitch = !passwordWitch;
    if(!passwordWitch){
        passwordIcon.setAttribute('src', '../images/password-icon.png');
        inputPassword.setAttribute('type','password')
    }else{
        passwordIcon.setAttribute('src', '../images/eye-on.png');
        inputPassword.setAttribute('type','text')
    }
}


inputEmail.addEventListener('focusout', emailFocus);
inputPassword.addEventListener('focusout', passwordFocus);
loginButton.addEventListener('click', login);
passwordIcon.addEventListener('click', onPassword);
