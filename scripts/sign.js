import {
  getParentsChildElement,
  showElement,
  hideElement,
  setElementTextContent,
} from "./dom.js";
import { isEmptyString } from "./utils.js";

export function showErrorMessage(target, message) {
  const errorMessageSpan = getParentsChildElement(
    target,
    ".input-error__message"
  );
  setElementTextContent(errorMessageSpan, message);
  showElement(errorMessageSpan);
}

export function hideErrorMessage(target) {
  const errorMessageSpan = getParentsChildElement(
    target,
    ".input-error__message"
  );
  hideElement(errorMessageSpan);
}

export function validatingMachine(
  target,
  validators,
  failAction,
  successAction
) {
  for (const { validator, message } of validators) {
    const result = validator(target, message);

    if (!isEmptyString(result)) {
      failAction(message);
      return false;
    }
  }
  successAction();
  return true;
}

export function setInputStyleError(target) {
  target.classList.add("input-error");
}

export function setInputStyleNormal(target) {
  target.classList.remove("input-error");
}

export function setEyeIconPositionError(eyeIcon) {
  eyeIcon.classList.add("eye-icon__error");
}

export function setEyeIconPositionNormal(eyeIcon) {
  eyeIcon.classList.remove("eye-icon__error");
}
