export async function GetProfileInformationLinks() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const body = await response.json();
  return body;
}

export async function GetFolderInformationLinks() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const body = await response.json();
  return body;
}
