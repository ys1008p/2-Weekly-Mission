<img src='./src/img/codeit.png'>
<br>
<br>
<br>

<div align="center">
  <h1>Codeit Weekly Mission</h1>
  <p><b>Front-end Developer Course</b></p>
  <p>Codeit 스프린트과정을 하며 한 주 한 주 위클리미션을 기록하는  문서입니다.<br> 해당 문서는 <b>각 파일들의 설명과 포인트</b> , <b>해당 문서의 주차별 위치</b> , <b>스스로 생각하는 개선점</b> 등이 쓰여있습니다. </p>
  <br>
</div>

## 1. 폴더구조

├── public  
├── src  
│ ├── api  
│ ├── component  
│ ├── img  
│ ├── utils  
│ ├── App.jsx  
│ ├── GloStyles.jsx  
│ ├── index.js  
└── README.md

### 1-1. api

- copyClipBoard : 링크 클립보드복사용 api
- dataTransform : 폴더의 객체 프로퍼티와 폴더안의 링크 객체 프로퍼티 필터링을 위한 데이터이름 통일용 함수
- getShareCardData : shared 페이지의 카드데이터 가져오는 api
- getUserCardData : 유저데이터 가져오는 api
- getUserPersoanlLinkDataCardData : 개인폴더의 링크(카드) 데이터 가져오는 api
- getUserPersonalFolderData : 개인폴더 데이터 가져오는 api

### 1-2. component

- loding : 로딩용 컴포넌트
- Card : 카드 컴포넌트
- CardList : 카드 컴포넌트의 집합
- CardPopOver : 카드 컴포넌트의 PopOver 컴포넌트
- FolderFilterButton : 폴더명을 렌더링해주는 컴포넌트
- FolderFilterButtonList : 각 폴더명과 폴더추가+ 버튼을 담고있는 컴포넌트
- FolderSiderbar : 클릭한 폴더의 이름 , '공유', '이름변경', '삭제' 버튼을 포함하는 컴포넌트
- Footer : 하단의 Footer 컴포넌트
- HeaderFolderSection : shared 페이지의 사용자 정보 컴포넌트
- HeaderSearchSection : Folder 페이지의 링크를 추가해보세요 인풋 컴포넌트
- LinkNotFound : Folder 페이지의 폴더에 데이터가 없을시 나타날 컴포넌트
- LinkSearchInput : Folder 페이지의 링크검색인풋 컴포넌트
- MainContainer : 각 페이지 Main 의 기본 컨테이너
- Modal : 모달창 컨테이너 컴포넌트
- Navbar : 네브바 컴포넌트
- NotFoundPage : 404 페이지 컴포넌트
- TestLanding : Link | Folder Page로 이동하는 테스트용 렌딩페이지 컴포넌트

## 1-2. 기능구현 목록

- 폴더버튼을 누를시 각 데이터 아이디에맞는 카드표시
- 라우터를 통하여 각 페이지를 나누었으며 TEST용 렌딩페이지를 구현하여 유연한 페이지 이동가능
- 라우터의 Outlet을 사용하여 Folder 페이지에서 특정 UI는 유지한체 Card컴포넌트만 바뀌게하였음
- 카드컴포넌트의 아이콘들마다 애니메이션을 줘서 HOVER 되었을시 직관적으로 보이게하였음
- 폴더버튼중 '전체'를 누를시 핸들러로 빈 배열을 전달하여 그에따른 이벤트들 구현
- 그 외 반응형 구현

## 2. 각 주차별 체크박스

> ✍️ 각 주차별로 체크의 위치가 변경됩니다. 해당 체크가 있는곳이 지금 읽고계시는 read.md의 내용이라고 보시면 되겠습니다.

- [ ] Week 1
- [ ] Week 2
- [ ] Week 3
- [ ] Week 4
- [ ] Week 5
- [ ] Week 6
- [ ] Week 7
- [ ] Week 8
- [ ] Week 9
- [ ] Week 10
- [x] Week 11
- [ ] Week 12
- [ ] Week 13
- [ ] Week 14

## 3. 스스로 생각하는 개선점 및 질문

### 1. public의 절대경로는 import로 참조못하나요?

- 위 디렉토리설명에서 나왔는데 웹팩오류로 `<img src='경로'>`로 불러오려고 하니깐 계속하여 엑박이 나와 `import` 를 사용하는 방법으로 바꾸었습니다. 처음에는 `public/img` 폴더에 위치하였으나 import는 절대경로를 참조 못한다는 오류가 계속나와서 그냥 위치를 바꾸어 버렸는데 원래 이런걸까요..? 아니면 저가 뭘 잘못했을까요 ..

### 2. 리액트 어떻게 쓰는건지 깨달았습니다.

- 원래 html/css/js 따로 짤때처럼 페이지별로 크게크게 만들었는데 그게 아니라 리액트는 만들어둔 컴포넌트로 페이지에 조립하는 형식으로 사용해야 하더라고요 그거 모르고 그전에 페이지별로 크게크게 했다가 이번미션에서 진짜 엄청난 고난을 겪었습니다. 하지만 힘들었던만큼 깨달았던것도 많아서 좋은것 같습니다.

<hr>
<p style="text-align: right;"><b>2023-12-05</b></p>
