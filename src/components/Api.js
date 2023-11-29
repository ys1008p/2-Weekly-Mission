import API from '../constant/api';

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
