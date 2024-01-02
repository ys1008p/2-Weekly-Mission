## 요구사항

### 기본

- [ ] TypeScript를 활용해 프로젝트의 필요한 곳에 타입을 명시해 주세요.
- [x] 검색어를 입력하면 현재 폴더에 있는 링크들 중 “url”, “title”, “description”에 검색어가 포함된 링크들만 필터해서 보이게 해주세요.
- [x] x 버튼을 클릭하면 입력값이 없던 ui 상태로 돌아갑니다.

### 심화

- [ ] 상단에 있던 링크 추가하기 영역이 가려져 보이지 않을 때 최하단에 링크 추가하기 영역을 고정하도록 만들어 주세요.
- [ ] 푸터가 시작되는 지점에서는 최하단에 고정된 링크 추가하기 영역이 보이지 않게 해주세요.(IntersectionObserver를 활용해 보세요.)

## 주요 변경사항

- FolderPage, SharedPage, SearchBar 수

## 스크린샷

![image](/screenshots/folderPage.png)
![image](/screenshots/folderPage2.png)
![image](/screenshots/folderPage3.png)

## 멘토에게

- Cancle Button은 Google Font에서 임시로 가져온 svg를 사용했습니다.
- Cancle Button을 눌렀을 때 handleSearchFolder도 실행되게 하고 싶었는데... 실행은 됐는데 비동기 관련해서 반응이 느린 것 같더라고요. 어떻게 해야할지 고민입니다.
