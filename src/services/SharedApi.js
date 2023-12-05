export async function getUserData() {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getSharedData() {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
