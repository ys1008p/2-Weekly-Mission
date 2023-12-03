export async function fetchData(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  } catch (e) {
    console.log("에러 :", e);
  }
}
