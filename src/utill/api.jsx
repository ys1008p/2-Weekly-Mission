const END_POINT = "https://bootcamp-api.codeit.kr/api";
export async function signin(auth) {
  try {
    const res = await fetch(`${END_POINT}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auth),
    });
    if (!res.ok) return { success: false, data: null };
    const json = await res.json();
    return { success: true, data: json.data };
  } catch (e) {
    console.log(e);
  }
}

export async function getUser() {
  try {
    const res = await fetch(`${END_POINT}/sample/user`);
    if (!res.ok) return { success: false, data: null };
    const data = await res.json();
    return { success: true, data };
  } catch (e) {
    console.log(e);
  }
}

export async function getFolder() {
  try {
    const res = await fetch(`${END_POINT}/sample/folder`);
    if (!res.ok) return { success: false, data: null };
    const data = await res.json();
    return { success: true, data };
  } catch (e) {
    console.log(e);
  }
}
