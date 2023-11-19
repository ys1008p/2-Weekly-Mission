const BASE_URL = "https://bootcamp-api.codeit.kr/api";

const fetchApi = {
  request: async function (url, { options = {}, headers = {} } = {}) {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        ...options.headers,
        ...headers,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.error(
        `${result?.error?.name || "Error"}   ${
          result?.error?.message || `HTTP error! status: ${response.status}`
        }`
      );
      return;
    }

    return result;
  },

  post: async function (url, { body, headers }) {
    console.log(body);
    const options = {
      method: "POST",
      body: body ? JSON.stringify(body) : null,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    const result = await this.request(url, { options });
    return result;
  },
};

export { fetchApi };
