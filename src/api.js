// 리퀘스트 함수들을 모아두고 사용
//비동기 함수
export async function getData() {
  //try catch
  //props 데이터가 실시간으로 변경되지 않는 이슈를 해결
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const body = await response.json();
    // console.log(body);
    return body;
  } catch (err) {
    // console.log(err.message);
  }
}

export async function getDataFile() {
  //try catch
  //props 데이터가 실시간으로 변경되지 않는 이슈를 해결
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const body = await response.json();
    // console.log(body);
    return body;
  } catch (err) {
    console.log(err.message);
  }
}
