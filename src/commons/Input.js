export default class Input {
  #input;
  #messageBox;
  #validator;

  constructor({ inputQuery, validator, messageQuery = "" }) {
    const input = document.querySelector(inputQuery);
    if (input.nodeName !== "INPUT")
      throw new Error("Unmatching tag name:input");
    this.#input = input;
    this.#messageBox = document.querySelector(messageQuery);
    this.#validator = validator;
  }

  getValue() {
    return this.#input.value;
  }

  getType() {
    return this.#input.type;
  }

  setType(type) {
    this.#input.type = type;
  }

  changeStateToInvalid() {
    this.#input.dataset.state = "error";
  }

  changeStateToValid() {
    this.#input.dataset.state = "normal";
  }

  showErrorMessage(message) {
    this.#messageBox.textContent = message;
    this.#messageBox.dataset.state = "error";
  }

  hideErrorMessage() {
    this.#messageBox.textContent = "";
    this.#messageBox.dataset.state = "normal";
  }

  validate(...args) {
    try {
      const isValid = this.#validator.validate(this.getValue(), ...args);
      return isValid;
    } catch (err) {
      throw err;
    }
  }

  addEventListener(event, handler) {
    this.#input.addEventListener(event, handler);
  }
}
