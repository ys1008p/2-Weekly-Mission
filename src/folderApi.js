export async function getFolder() {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder')
  const folderType = await response.json()
  return folderType
};