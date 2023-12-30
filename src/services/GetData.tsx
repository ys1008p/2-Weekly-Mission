import { API_BASE_URL } from "../constants.ts";

async function getDate(url: string) {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`);
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (error) {
    console.log("An error occurred:", error);
    throw error;
  }
}

export default getDate;
