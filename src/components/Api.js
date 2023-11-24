import API from '../constant/API';

export async function getFolder() {
  const result = await fetch(API.SAMPLE_FOLDER);
  const body = await result.json();
  return body;
}

export async function getUser() {
  const result = await fetch(API.SAMPLE_USER);
  const body = await result.json();
  return body;
}

// 참고하는 예시코드입니다. 주석이 더러운 점 죄송합니다!!
// export async function getReviews({ order = 'createdAt', offset, limit }) {
//   const query = `order=${order}&offset=${offset}&${limit}`;
//   const response = await fetch(`${API.reviewList}?${query}`);
//   const body = response.json();
//   return body;
// }
