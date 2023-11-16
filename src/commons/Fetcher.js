export default class Fetcher {
  #baseURL;
  #handlers;

  /**
   * Create fetcher
   * @param {{baseURL: string, handlers: (response: Response) => Response}}
   */
  constructor({ baseURL, handlers = [] }) {
    if (!handlers instanceof Array) throw new Error("Handlers should be array");
    this.#baseURL = baseURL;
    this.#handlers = handlers;
  }

  async post(url, body) {
    const res = await fetch(`${this.#baseURL}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const handledRes = this._handleResponse(res);
    if (!handledRes.ok)
      throw new Error(
        `Error occured while fetching ${handledRes.url}. Status: ${handledRes.status}.`
      );

    const data = await handledRes.json();

    return data;
  }

  /**
   * @param {Response} res
   * @returns {Response}
   */
  _handleResponse(res) {
    return this.#handlers.reduce((prevRes, handle) => handle(prevRes), res);
  }
}
