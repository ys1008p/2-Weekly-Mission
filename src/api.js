const BASIC_URL = "https://bootcamp-api.codeit.kr";
export async function getUserInfo() {
  const response = await fetch(`${BASIC_URL}/api/sample/user`);

  if (!response.ok) {
    const result = null;
    return result;
  }
  const body = await response.json();
  return body;
}

export async function getSharedFolder() {
  const response = await fetch(`${BASIC_URL}/api/sample/folder`);

  if (!response.ok) {
    const result = null;
    return result;
  }
  const body = await response.json();
  return body;
}

export async function getUserFolderList() {
  const response = await fetch(`${BASIC_URL}/api/users/1/folders`);
  if (!response.ok) {
    const result = null;
    return result;
  }
  const body = await response.json();
  return body;
}

export async function getFolder(folderId = "") {
  const query = folderId !== "" ? `?folderId=${folderId}` : "";

  try {
    const response = await fetch(`${BASIC_URL}/api/users/1/links${query}`);

    if (!response.ok) {
      const result = null;
      return result;
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error fetching folder data:", error);
    throw error;
  }
}
