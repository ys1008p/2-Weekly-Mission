const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

const fetchApi = {
  request: async function (url, { options = {}, headers = {} } = {}) {
    const accessToken = localStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        Authorization: accessToken || '',
        ...options.headers,
        ...headers,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw {
        name: result?.error?.name || 'Error',
        message: result?.error?.message || `HTTP error! status: ${response.status}`,
      };
    }

    return result;
  },

  post: async function (url, { body, headers }) {
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    const result = await this.request(url, { options });
    return result;
  },
};

export { fetchApi };
