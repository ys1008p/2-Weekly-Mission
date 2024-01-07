/**  
api

1. 폴더목록 전체, 즐겨찾,코딩 팁 ...
https://bootcamp-api.codeit.kr/api/users/1/folders

2. 전체 폴더 링크
https://bootcamp-api.codeit.kr/api/users/1/links

3. 전체 폴더 id 
https://bootcamp-api.codeit.kr/api/users/1/links?folderId={해당 폴더 ID}

4. 프로필 데이터
https://bootcamp-api.codeit.kr/api/users/1
*/

const BASE_PATH = "https://bootcamp-api.codeIt.kr/api";

export const getCodeItInfo = async (apiName) => {
  try {
    const response = await fetch(`${BASE_PATH}/${apiName}`);

    if (!response.ok) {
      throw new Error("Failed codeItInfo");
    }

    const data = await response.json();
    // console.log(`codeitApi>>>>>>>>>>>>>>>`);
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
