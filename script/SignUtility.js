const email = `email`;
const password = `password`;
const passwordCheck = `password-check`;

const inputFormClass = `input-form`
const inputFormInputClass = `${inputFormClass}__input`;

const showIconClass = `${inputFormClass}__show-icon`;
const showIconOffClass = `${showIconClass}_eye-off`;

const errorClass = `${inputFormClass}__input_error`;

const SignRegex = {
    [email]: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    // 갈이 8~20, 영문자, 숫자 1개 이상
    [password]: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/,
};

const SignErrorMessage = {
    [email]: {
        nothing: `이메일을 입력해주세요`,
        invaild: `올바른 이메일 주소가 아닙니다`,
        used: `이미 사용 중인 이메일입니다`,
        other: `이메일을 확인해주세요`,
    },
    [password]: {
        nothing: `비밀번호을 입력해주세요`,
        invaild: `비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요`,
        other: `비밀번호을 확인해주세요`,
    },
    [passwordCheck]: {
        different: `비밀번호가 일치하지 않아요`,
    }
};

const TestLoginInfo = {
    [email]: `test@codeit.kr`,
    [password]: `codeit101`,
}

function signInInputFocusOutCheckHandler(e) {
    const { target } = e;

    const errorMessage = getSignInErrorMessageByTarget(target);
    handleErrorMessageElement(target, errorMessage);
}

function signUpInputFocusOutCheckHandler(e) {
    const { target } = e;

    const errorMessage = getSignUpErrorMessageByTarget(target);
    handleErrorMessageElement(target, errorMessage);
}


function getSignInErrorMessageByTarget(target) {
    switch (target.name) {
        case email: {
            if (nothingErrorCheck(target)) {
                return SignErrorMessage[email].nothing;
            }

            if (invalidErrorCheck(target)) {
                return SignErrorMessage[email].invaild;
            }

            break;
        }

        case password: {
            if (nothingErrorCheck(target)) {
                return SignErrorMessage[password].nothing;
            }

            if (invalidErrorCheck(target)) {
                return SignErrorMessage[password].invaild;
            }

            break;
        }

        default:
            break;
    }

    return undefined;
}

function getSignUpErrorMessageByTarget(target) {
    switch (target.name) {
        case email: {
            if (nothingErrorCheck(target)) {
                return SignErrorMessage[email].nothing;
            }

            if (invalidErrorCheck(target)) {
                return SignErrorMessage[email].invaild;
            }

            if (usedErrorCheck(target)) {
                return SignErrorMessage[email].used;
            }

            break;
        }

        case password: {
            if (nothingErrorCheck(target)) {
                return SignErrorMessage[password].nothing;
            }

            if (invalidErrorCheck(target)) {
                return SignErrorMessage[password].invaild;
            }

            break;
        }

        case passwordCheck: {
            if (differentErrorCheck(target)) {
                return SignErrorMessage[passwordCheck].different;
            }

            break;
        }

        default:
            break;
    }

    return undefined;
}

function getErrorMessageElement(elements) {

    for (const element of elements) {
        if (element.classList.contains(errorClass)) {
            return element;
        }
    }

    return null;
}

function testSignInButtonClickCheckHandler(e) {
    const inputFormInputList = findinputFormInputList();

    let isError = false;

    for (const inputFormInput of inputFormInputList) {
        if (!otherErrorCheck(inputFormInput)) {
            isError = true;
            break;
        }
    }

    console.log(isError)
    if (isError) {
        for (const inputFormInput of inputFormInputList) {
            putErrorMessageParentsSibling(inputFormInput, SignErrorMessage[inputFormInput.name].other);
            addErrorClassOnInputForm(inputFormInput);
        }
    } else {
        goToFolderPage();
    }
}

function testSignUpButtonClickCheckHandler(e) {
    const inputFormInputList = findinputFormInputList();

    let isError = false;

    for (const inputFormInput of inputFormInputList) {
        const errorMessage = getSignUpErrorMessageByTarget(inputFormInput);
        handleErrorMessageElement(inputFormInput, errorMessage);

        errorMessage? isError = true: null;
    }

    if(!isError){
        goToFolderPage();
    } 
}

/**
 * 
 * @param {KeyboardEvent} e 
 */
function testSignUpInputCheckHandler(e){
    if(e.key === 'Enter'){
        testSignUpButtonClickCheckHandler(e);
    }
}

function findinputFormInputList() {
    return document.querySelectorAll(`.${inputFormInputClass}`);
}

function handleErrorMessageElement(target, errorMessage) {
    if (errorMessage) {
        putErrorMessageParentsSibling(target, errorMessage);
        addErrorClassOnInputForm(target);
    } else {
        deleteErrorMessageParentsSibling(target);
        deleteErrorClassOnInputForm(target);
    }
}

function nothingErrorCheck(element) {
    const { value } = element;

    if (value === "") {
        return true;
    }

    return false;
}

function invalidErrorCheck(element) {
    const { name, value } = element;

    return !SignRegex[name].test(value);
}

function usedErrorCheck(element) {
    const { name, value } = element;

    return value === TestLoginInfo[name];
}

function differentErrorCheck(element) {
    const { value } = document.querySelector('#signup-password');
    const passwordCheckValue = element.value;

    if (value !== passwordCheckValue) {
        return true;
    }

    return false;
}

function otherErrorCheck(inputFormInput) {
    const { value, name } = inputFormInput;

    switch (name) {
        case email: {
            return value === TestLoginInfo[email];
        }

        case password: {
            return value === TestLoginInfo[password];
        }
    }
}

function goToFolderPage() {
    location.replace('./folder.html');
}

function putErrorMessageParentsSibling(target, errorMessage) {
    const grandParent = target.parentElement.parentElement;
    const ParentSiblings = target.parentElement.parentElement.children;

    const ErrorMessageElement = getErrorMessageElement(ParentSiblings);
    if (ErrorMessageElement) {
        ErrorMessageElement.textContent = errorMessage;
    } else {
        const errorMessageElement = document.createElement('span');
        errorMessageElement.textContent = errorMessage;
        errorMessageElement.classList.add(errorClass);
        grandParent.append(errorMessageElement);
    }
}

function addErrorClassOnInputForm(target) {
    target.classList.add(errorClass);
}

function deleteErrorMessageParentsSibling(target) {
    const ParentSiblings = target.parentElement.parentElement.children;
    const ErrorMessageElement = getErrorMessageElement(ParentSiblings);
    ErrorMessageElement?.remove();
}

function deleteErrorClassOnInputForm(target) {
    target?.classList.remove(errorClass);
}

function showIconClickHandler(e) {
    const { target } = e;

    const showTarget = [...target.parentElement.children].find((element) => element.classList.contains(inputFormInputClass));
    changeShowType(target, showTarget);
}

function changeShowType(iconElement, targetElement) {
    if (targetElement.type === 'password') {
        targetElement.type = 'text';
        iconElement.classList.remove(showIconOffClass);
    } else {
        targetElement.type = 'password';
        iconElement.classList.add(showIconOffClass);
    }
}

export { signInInputFocusOutCheckHandler, signUpInputFocusOutCheckHandler, testSignInButtonClickCheckHandler, testSignUpButtonClickCheckHandler, testSignUpInputCheckHandler, showIconClickHandler };