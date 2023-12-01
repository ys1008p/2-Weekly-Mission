const BASE_PATH = "https://bootcamp-api.codeIt.kr/api";

export const getCodeItInfo = async (apiName) => {
  try {
    const response = await fetch(`${BASE_PATH}/${apiName}`);

    if (!response.ok) {
      throw new Error("Failed codeItInfo");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
