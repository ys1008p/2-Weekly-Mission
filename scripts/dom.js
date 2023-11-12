// 공통
function getParentsChildElement(target, selector) {
  const parent = target.parentElement;
  return parent.querySelector(selector);
}

function setElementTextContent(target, text) {
  target.textContent = text;
}

function addElementClass(target, className) {
  target.classList.add(className);
}

function removeElementClass(target, className) {
  target.classList.remove(className);
}

function toggleElementClass(target, className) {
  target.classList.toggle(className);
}

export {
  addElementClass,
  getParentsChildElement,
  removeElementClass,
  setElementTextContent,
  toggleElementClass,
};
