
  export async function getFolderData() {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
      if (!response.ok) throw new Error();
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }