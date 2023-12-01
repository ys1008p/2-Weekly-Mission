export async function getUserData() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getUserPick() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const body = await response.json();
    return body;
  } catch {
    console.log(err.message);
  }
}
