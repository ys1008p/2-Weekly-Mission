const link = "https://bootcamp-api.codeit.kr/api";

const isValidAccess = async function (tryacessUser, local) {
  try {
    const response = await fetch(`${link}/${local}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tryacessUser),
    });
    const userInfoCount = Object.keys(tryacessUser).length;
    if (response.ok && userInfoCount === 2) {
      const result = await response.json();
      const accessToken = result.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
    }
    return response.status;
  } catch (e) {
    console.error(e);
  }
};

export { isValidAccess };
