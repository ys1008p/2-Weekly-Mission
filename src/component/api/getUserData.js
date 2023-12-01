export async function getUserData() {
  try {
    const res = await fetch(`https://bootcamp-api.codeit.kr/api/sample/user`);

    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  } catch (e) {
    console.log("에러 :", e);
  }
}
