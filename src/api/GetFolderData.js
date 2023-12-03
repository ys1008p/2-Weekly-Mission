import useFetch from "../hooks/useFetch";

const GetFolderData = () => {
  const {data} = useFetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  console.log(data)
  // const folderData = {error: "존재",}
  // const folderOwnerData = folderData.error && {
  //   name: folderData.folder.name,
  //   owner: folderData.folder.owner.name,
  //   profile: folderData.folder.owner.profileImageSource,
  // }
  // const folderLinksData = folderData.error && {
  //   links: folderData.folder.links,
  // }
  
  // return {folderData, folderOwnerData, folderLinksData};
}

export default GetFolderData;