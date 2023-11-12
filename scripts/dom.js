// 공통
export function getParentsChildElement(target, selector) {
  const parent = target.parentElement;
  return parent.querySelector(selector);
}

export function setElementTextContent(target, text) {
  target.textContent = text;
}

export function addElementClass(target, className) {
  target.classList.add(className);
}

export function removeElementClass(target, className) {
  target.classList.remove(className);
}

export function toggleElementClass(target, className) {
  target.classList.toggle(className);
}
