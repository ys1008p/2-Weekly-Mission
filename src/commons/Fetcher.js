import { FetchError } from "/src/commons/FetchError.js";

export default class Fetcher {
  #baseURL;

  constructor({ baseURL }) {
    this.#baseURL = baseURL;
  }

  async post(url, body) {
    console.log(JSON.stringify(body));
    const res = await fetch(`${this.#baseURL}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok)
      throw new FetchError(
        `Error occured while fetching ${this.#baseURL}${url}. Status: ${
          res.status
        }.`
      );

    const data = await res.json();

    return data;
  }
}
