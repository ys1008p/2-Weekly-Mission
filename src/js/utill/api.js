const END_POINT = "https://bootcamp-api.codeit.kr/api";

export async function checkEmailExist(email) {
  try {
    const res = await fetch(`${END_POINT}/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (res.status === 409) return false;
    return true;
  } catch (e) {
    console.error(e);
  }
}

export async function signin(auth) {
  try {
    const res = await fetch(`${END_POINT}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auth),
    });
    const json = await res.json();
    if (res.status === 400) return false;
    return json.data;
  } catch (e) {
    console.log(e);
  }
}

export async function signup(auth) {
  try {
    const res = await fetch(`${END_POINT}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auth),
    });
    const json = await res.json();
    if (res.status === 400) return false;
    return json.data;
  } catch (e) {
    console.log(e);
  }
}
