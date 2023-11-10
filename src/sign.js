// 비밀번호 input
const eyeBtn = document.getElementById('eye-btn')
const pwInput = document.getElementById('pwd');
// 비밀번호 확인 input
const EYEBTN_CHECK =document.getElementById('eye-btn-check')
const pwCheckInput = document.getElementById('pwd-check') 
// eye icon 
const eyeOff = document.querySelector('.off-img');
const eyeOn = document.querySelector('.on-img');

//비밀번호 input
eyeBtn.addEventListener('click',() => {
if(pwInput.type === 'password'){
  pwInput.type = 'text';
  eyeOn.style.display = 'block';
  eyeOff.style.display = 'none';
}else{
  pwInput.type = 'password';
  eyeOff.style.display = 'block';
  eyeOn.style.display = 'none';
}

})
// 비밀번호 확인 input 
EYEBTN_CHECK.addEventListener('click',()=>{
  if(pwCheckInput.type === 'password'){
    pwCheckInput.type = 'text';
    eyeOn.style.display = 'block';
    eyeOff.style.display = 'none';
  }else{
    pwCheckInput.type = 'password';
    eyeOff.style.display = 'block';
    eyeOn.style.display = 'none';
  }
})