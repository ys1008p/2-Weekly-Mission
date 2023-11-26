const BASE_URL = 'https://bootcamp-api.codeit.kr';

const getQueryString = (query: Record<string, string | number>) => {
  let result = '';
  for (const key in query) {
    result += `${key}=${query[key]}&`;
  }
  return result;
};

export const useGetRequest = async (
  path: string,
  query?: Record<string, string | number>,
) => {
  const queryString = query !== undefined ? getQueryString(query) : '';
  const response = await fetch(`${BASE_URL}${path}?${queryString}`);

  if (!response.ok) throw new Error('데이터를 불러오는데 실패했습니다');

  const data = await response.json();
  return data;
};

export const usePostRequest = async (
  path: string,
  body: Record<string, string | number>,
) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) throw new Error('요청을 처리하는데 실패했습니다');

  const data = await response.json();
  return data;
};
