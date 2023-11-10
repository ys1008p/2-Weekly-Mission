
const formControlInput = document.querySelectorAll(".formControl > input")

formControlInput.forEach(function(item){
  item.addEventListener("focusin", (event) => {
    item.style.outline = "none";
    item.style.border = "1px solid #6D6AFE";
  });  
  item.addEventListener("focusout", (event) => {
    item.style.border = "1px solid #CCD5E3";
  });  

})
