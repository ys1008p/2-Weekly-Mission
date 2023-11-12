/**
 * 
 * @param {InputEvent} event 
 */
export function inputError(event, errorCheckFunction, errorClass = "", errorComment = ""){
    
    const element = event.target;

    if(!errorCheckFunction(element)){
        element.classList.remove(errorClass);
        element.parentElement.nextElementSibling.remove();
        return;
    }

    if(element.classList.contains(errorClass)){
        return;
    }

    element.classList.add(errorClass);

    if(errorComment !== ""){
        const comment = document.createElement('p');
        comment.textContent = errorComment;
        comment.classList.add(errorClass);
        element.parentElement.after(comment);
    }
}

export function SignInButtonError(event, idInputElement, pwInputElement,  errorCheckFunction, errorClass = "", idErrorComment="", pwErrorComment=""){
    
    if(!errorCheckFunction(idInputElement, pwInputElement)){
        idInputElement.classList.remove(errorClass);
        idInputElement.parentElement.nextElementSibling.remove();
        pwInputElement.classList.remove(errorClass);
        pwInputElement.parentElement.nextElementSibling.remove();
        return;
    }

    if(idInputElement.classList.contains(errorClass)){
        return;
    }
    if(pwInputElement.classList.contains(errorClass)){
        return;
    }
    
    idInputElement.classList.add(errorClass);
    pwInputElement.classList.add(errorClass);

    if(idErrorComment !==""){
        const comment = document.createElement('p');
        comment.textContent = idErrorComment;
        comment.classList.add(errorClass);
        idInputElement.parentElement.after(comment);
    }

    if(pwErrorComment !==""){
        const comment = document.createElement('p');
        comment.textContent = pwErrorComment;
        comment.classList.add(errorClass);
        pwInputElement.parentElement.after(comment);
    }

}