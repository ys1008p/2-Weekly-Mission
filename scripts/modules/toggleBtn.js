function togglePasswordHidden(e){
    const parentLabel = e.target.closest(".signForm_label");
    const passwordInput = parentLabel.querySelector(".signForm_input");
    e.preventDefault()
    passwordInput.type = passwordInput.type === "text" ? "password" : "text" 

}

export default togglePasswordHidden;