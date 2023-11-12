// 공통
export function getParentsChildElement(target, selector) {
  const parent = target.parentElement;
  return parent.querySelector(selector);
}

export function showElement(target) {
  target.classList.remove("hide");
}

export function hideElement(target) {
  target.classList.add("hide");
}

export function setElementTextContent(target, text) {
  target.textContent = text;
}
