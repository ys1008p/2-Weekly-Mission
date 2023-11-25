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
    if ((!handlers) instanceof Array)
      throw new Error("Handlers should be array");

    const defaultHandler = (res) => {
      if (!res.ok)
        throw new Error(
          `Error occured while fetching ${res.url}. Status: ${res.status}.`,
        );

      return res;
    };

    this.#baseURL = baseURL;
    this.#handlers = [...handlers, defaultHandler];
    this.#headers = structuredClone(headers);
  }

  /**
   * HTTP Method GET Request
   * @param {string} url
   * @param {{queryParams: Record<string, string>}} options
   */
  async get(url, { queryParams } = {}) {
    const queryString = queryParams
      ? this.convertParamsToQueryString(queryParams)
      : "";
    const res = await fetch(`${this.#baseURL}${url}${queryString}`);
    const handledRes = this._handleResponse(res);
    const data = await handledRes.json();

    return data;
  }

  async post(url, body) {
    const res = await fetch(`${this.#baseURL}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: this.#headers,
    });

    const handledRes = this._handleResponse(res);

    const data = await handledRes.json();

    return data;
  }

  /**
   * @param {HeadersInit} headers
   */
  setHeaders(headers) {
    this.#headers = structuredClone(headers);
  }

  convertParamsToQueryString(params) {
    return `?${new URLSearchParams(params)}`;
  }

  /**
   * @param {Response} res
   * @returns {Response}
   */
  _handleResponse(res) {
    return this.#handlers.reduce((prevRes, handle) => handle(prevRes), res);
  }
}
