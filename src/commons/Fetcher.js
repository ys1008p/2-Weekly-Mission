export default class Fetcher {
  #baseURL;
  #handlers;
  #headers;

  /**
   * Create fetcher
   * @param {{baseURL: string, handlers: (response: Response) => Response}}
   */
  constructor({
    baseURL,
    handlers = [],
    headers = { "Content-Type": "application/json" },
  }) {
    if (!handlers instanceof Array) throw new Error("Handlers should be array");
    this.#baseURL = baseURL;
    this.#handlers = [...handlers];
    this.#headers = structuredClone(headers);
  }

  async post(url, body) {
    const res = await fetch(`${this.#baseURL}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: this.#headers,
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
   * @param {HeadersInit} headers
   */
  setHeaders(headers) {
    this.#headers = structuredClone(headers);
  }

  /**
   * @param {Response} res
   * @returns {Response}
   */
  _handleResponse(res) {
    return this.#handlers.reduce((prevRes, handle) => handle(prevRes), res);
  }
}
