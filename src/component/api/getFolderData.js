export async function getFolderData() {
  try {
    const res = await fetch(`https://bootcamp-api.codeit.kr/api/sample/folder`);

    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  } catch (e) {
    console.log("에러 :", e);
  }
}
