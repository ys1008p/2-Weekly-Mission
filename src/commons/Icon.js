export default class Icon {
  #baseUrl =
    "https://res.cloudinary.com/divjslgco/image/upload/f_auto,q_auto/v1/codeit/icons/";
  #icon;

  constructor(iconQuery) {
    this.#icon = document.querySelector(iconQuery);
  }

  setIcon(name) {
    this.#icon.src = `${this.#baseUrl}/${name}`;
  }
}
