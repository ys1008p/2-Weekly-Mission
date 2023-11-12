import { btn, email, password, inputs } from "./common.js";
import { usersData } from "./userData.js";

function ourMembers (e) {
  for(let user of usersData){
    if (email.value === user[0] && password.value === user[1]) {
      e.preventDefault()
      window.location.href = 'folder.html';
    }
  }
}

btn.addEventListener('click', ourMembers)
btn.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    ourMembers()
  } 
})

