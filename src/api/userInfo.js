const userPath = "https://bootcamp-api.codeit.kr";

export const userInfo = async () => {
  try {
    const response = await fetch(`${userPath}/api/sample/user`);

    if (!response.ok) {
      throw new Error("Failed UserInfo");
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.log(error);
  }
};
