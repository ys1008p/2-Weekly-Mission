const link = "https://bootcamp-api.codeit.kr/api"

const isExistUser = async function (email, password) {
  const tryloginUser = {
    "email": email,
    "password": password,
  }
  try {
    const response = await fetch(`${link}/sign-in`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tryloginUser),
    });
    return response.status
  } catch(e) {
    console.error(e);
  }
}

export { isExistUser };