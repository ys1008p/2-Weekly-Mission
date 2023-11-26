const userPath = "https://bootcamp-api.codeit.kr";

export const folderInfo = async () => {
  try {
    const response = await fetch(`${userPath}/api/sample/folder`);

    if (!response.ok) {
      throw new Error("Failed folder");
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.log(error);
  }
};
