

export async function getUserData() {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
      if (!response.ok) throw new Error();
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

export async function getSharedData() {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
      if (!response.ok) throw new Error();
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  export async function getFolderUserData() {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
      if (!response.ok) throw new Error();
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  export async function getFolderData() {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/links");
      if (!response.ok) throw new Error();
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }