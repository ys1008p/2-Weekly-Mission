
const email = document.querySelector('#join-email');
const password = document.querySelector('#join-password');
const inputEmail = document.querySelector('#join-email__input');
const inputPassword = document.querySelector('#join-password__input');
const inputPasswordCheck = document.querySelector('.password-check__input');
const passwordCheck = document.querySelector('#password-check');
const joinButton = document.querySelector('#join-page-button');
const passwordIcons = document.querySelectorAll('.password-icon');

let isJoin ={
    email: false,
    password: false
}
let passwordWitch = false;
let span = document.createElement('span');
let div = document.createElement('div');
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function emailFocus(e){
    if(e.target.value === ""){
        isJoin.email=false
        inputEmail.classList.add('alert-line');
        div.innerHTML = "이메일을 입력해주세요.";
        email.appendChild(div);  
        div.classList.add('email-alert-text');
    }else if(inputEmail.value ==='test@codeit.com'){
        isJoin.email=false
        inputEmail.classList.add('alert-line');
        div.innerHTML = "이미 사용 중인 이메일입니다.";
        email.appendChild(div);  
        div.classList.add('email-alert-text');
    }else if (!emailRegex.test(inputEmail.value)){
        isJoin.email=false
        inputEmail.classList.add('alert-line');
        div.innerHTML = "올바른 이메일 주소가 아닙니다.";
        email.appendChild(div);  
        div.classList.add('email-alert-text');
    }else{
        isJoin.email=true
        inputEmail.classList.remove('alert-line');
        e.target.nextElementSibling.remove()
    }
        
}

function passwordFocus(e){
    if(inputPassword.value === ""){ 
        isJoin.password = false
        inputPassword.classList.add('alert-line');
        span.innerHTML = "비밀번호를 입력해주세요.";
        password.appendChild(span);
        span.classList.add('password-alert-text');
    }else if((!passwordRegex.test(inputPassword.value))){
        isJoin.password = false
        inputPassword.classList.add('alert-line');
        span.innerHTML = "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.";
        password.appendChild(span);
        span.classList.add('password-alert-text');
    }else{
        isJoin.password = true
        inputPassword.classList.remove('alert-line');
        e.currentTarget.parentElement.nextElementSibling.remove()
    }
}


function validatePassword(e){
    if(inputPassword.value !== inputPasswordCheck.value){
        isJoin.passwordCheck =false
        span.innerHTML = "비밀번호가 일치하지 않아요.";
        inputPasswordCheck.classList.add('alert-line')
        span.classList.add('check-alert-text');
        passwordCheck.appendChild(span);
    }else{
        isJoin.passwordCheck =true
        inputPasswordCheck.classList.remove('alert-line');
        e.currentTarget.parentElement.nextElementSibling.remove()
    }
}


function join(e) {
    e.preventDefault();
    if (isJoin.email && isJoin.password && isJoin.passwordCheck) {
        window.location.href = "../folder.html";
    }else{
        if(!isJoin.email){
            inputEmail.classList.add('alert-line');
            div.innerHTML = "이메일을 확인해주세요.";
            div.classList.add('email-alert-text');
            email.appendChild(div);  
        }
        if(!isJoin.password){
            inputPassword.classList.add('alert-line');
            span.innerHTML = "비밀번호를 확인해주세요.";
            password.appendChild(span);
            span.classList.add('password-alert-text');
         }
    }
}

function onPassword(e){
    passwordWitch = !passwordWitch;
    if(!passwordWitch){
        e.target.setAttribute('src', '../images/password-icon.png');
        inputPassword.setAttribute('type','password')
    }else{
        e.target.setAttribute('src', '../images/eye-on.png');
        inputPassword.setAttribute('type','text')
    }
}

inputEmail.addEventListener('focusout', emailFocus);
inputPassword.addEventListener('focusout', passwordFocus);
inputPasswordCheck.addEventListener('focusout', validatePassword);
joinButton.addEventListener('click', join );
passwordIcons.forEach(icon => {
    icon.addEventListener('click', onPassword);
})


