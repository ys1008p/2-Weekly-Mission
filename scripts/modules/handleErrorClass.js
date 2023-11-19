const CLASSNAME_ERROR = "error";
const CLASSNAME_ERROR_MSG = "error-msg";

function renderErrorMSGNode(target, msg){
    target.classList.add(CLASSNAME_ERROR)
    const parentLabel = target.closest(".signForm_label");

    const errorMSGNode = parentLabel.querySelector(`.${CLASSNAME_ERROR_MSG}`) ?? document.createElement("p")
    const prevErrorMSG = errorMSGNode?.textContent

    if (msg === prevErrorMSG){
        return
    }
    if (msg){
        errorMSGNode.classList.add(CLASSNAME_ERROR_MSG)
        errorMSGNode.textContent = msg
        if (!parentLabel.querySelector(`.${CLASSNAME_ERROR_MSG}`)){
            parentLabel.append(errorMSGNode) 
        }
    }
}

function removeErrorMSGNode(target){
    target.classList.remove(CLASSNAME_ERROR);
    const errorMSGNode = target.parentElement.querySelector(`.${CLASSNAME_ERROR_MSG}`);
    if (errorMSGNode) {
        errorMSGNode.remove()
    }
}

export {renderErrorMSGNode, removeErrorMSGNode};