const email = `email`;
const password = `password`;
const inputFormInputClass = `input-form__input`;
const errorClass = `input-form__input_error`;

const SignRegex = {
    [email]: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    // 갈이 8~20, 영문자, 숫자 1개 이상
    [password]: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/,
};

const SignErrorMessage = {
    [email]: {
        nothing: `이메일을 입력해주세요`,
        invaild: `올바른 이메일 주소가 아닙니다`,
        other: `이메일을 확인해주세요`,
    },
    [password]: {
        nothing: `비밀번호을 입력해주세요`,
        invaild: `올바른 비밀번호 형식이 아닙니다`,
        other: `비밀번호을 확인해주세요`,
    }
};

const TestLoginInfo = {
    [email]: `test@codeit.kr`,
    [password]: `codeit101`,
}

function inputFocusOutCheckHandler(e) {
    const { target } = e;

    const errorMessage = getErrorMessageByTarget(target);

    if (errorMessage) {
        putErrorMessageParentsSibling(target, errorMessage);
        addErrorClassOnInputForm(target);
    } else {
        deleteErrorMessageParentsSibling(target);
        deleteErrorClassOnInputForm(target);
    }


}

function getErrorMessageByTarget(target) {
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


function getErrorMessageElement(elements) {

    for (const element of elements) {
        if (element.classList.contains(errorClass)) {
            return element;
        }
    }

    return null;
}

function TestloginButtonClickCheckHandler() {
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
            putErrorMessageParentsSibling(inputFormInput, SignErrorMessage[inputFormInput.name].other)
            addErrorClassOnInputForm(inputFormInput);
        }
    } else {
        goToFolderPage()
    }
}

function findinputFormInputList() {
    return document.querySelectorAll(`.${inputFormInputClass}`);
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

function goToFolderPage(){
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
    ErrorMessageElement.remove();
}

function deleteErrorClassOnInputForm(target) {
    target.classList.remove(errorClass);
}

export { inputFocusOutCheckHandler, TestloginButtonClickCheckHandler };