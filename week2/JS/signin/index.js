import { email, password, inputs, btn, eye2, testData } from "../sig_all/contants.js";
import { errText, isValidEmail, isValidPassword,passwordError ,eyeToggle} from "../sig_all/utils/sig_all_func.js";


function checkTemplate (e) {
  if (e.target === email) {
    if (isValidEmail(e.target.value)){
     e.target.classList.remove('err');
     e.target.nextElementSibling === errText ? errText.remove() : undefined;
    }
  }
  if (e.target === password){
    if (isValidPassword(e.target.value)){
      e.target.classList.remove('err')
      e.target.nextElementSibling === errText ? errText.remove() : undefined;
    }
  }
}

function ourMembers (e) {
  e.preventDefault()
    if (testData.some((member) => member.userEmail === email.valuel && member.userPwd === password.value)) {
      window.location.href = 'folder.html';

    } else if(!testData.some((member) => member.userEmail === email.valuel)){
      email.classList.add('err');
      return alert('이메일을 확인해 주세요');
    } else {
      password.classList.add('err');
      return alert ('비밀번호를 확인해 주세요')
    }
  }

password.addEventListener('focusout', passwordError)
inputs.forEach(inputElement => {
  inputElement.addEventListener('focusout',checkTemplate);
});

btn.addEventListener('submit', ourMembers )


eye2.addEventListener('click', eyeToggle);