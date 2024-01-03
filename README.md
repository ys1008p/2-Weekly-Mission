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

### 1-3 utils

- data.js : 날짜변환을 위한 유틸함수
- fetchData.js : fetch를 간략하게 사용하기위한 유틸함수
- modalItemData.js : 각 모달창의 렌더링 데이터를 담고있는 객체집합

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

### 1. (질문)링크복사 api가 작동을 안하는이유

- api 폴더의 copyClipBoard.js 를 사용하려고 하였지만 함수자체에는 문제가 없는것 같은데 작동을 안합니다. 혹시 local:3000 환경이여서 그런가요? 아니면 잘못한 부분이 있을까요

### 2. (질문)지금 한것처럼 컴포넌트 자체를 객체로 분리하여 사용해도되는지

- 이번에 다른 스프린터분들과 다르게 utils->modalItemData.js 를 보시면 객체안에 ' 컴포넌트 ' 를 집어넣어서 각 버튼에 맞는 모달창에 데이터를 넘겨주는 식으로 작업을 하였습니다. 개발자도구 혹은 터미널에서 별다른 경고가 없긴한데... 솔직히 이렇게 해도 되는거 맞나요? 절대 안될것 같은데 만약 안되는것이면 어떠한 이유로 안 되는지 궁금합니다.

### 3. (질문)유저데이터 디펜던시 추가시 무한로딩

- App.js 에 userData를 불러오는 useEffect의 의존성을 추가하면 무한로딩이 됩니다. (userData를 추가하였습니다 ex.[userData]) 어떻게 해결해야 할까요 그리고 의존성 배열을 안 넣는경우 첫 렌더링에만 호출이 되어서 어떠한 경우에는 안 넣을때도 있다고 들었습니다. 꼭 넣어야 하는게 정답인가요 ?

### 4. (개선점)utils 와 api등등 명확한 분리

- 지금 보시면 utils... api... 폴더에 그냥 마구잡이로 막 들어있습니다... 분리를 좀 제대로 할 필요성을 느끼네요

### 5. (개선점)역시나 변수명 , 컴포넌트 이름 짓기가 어렵다.

- 프로젝트를 하다가 간만에 위클리미션을 켜서 제일 어려웠던 점은 제가 쓴게 다 뭐가 뭔지 모르겠다는 겁니다. 그래서 위에 폴더구조 하나하나 설명도 써놓았구요 ... 다음부터는 하나하나 귀찮다고 막 짓지말고 진짜 신중하게 지어야 겠습니다.

### 6. (개선점)구조를 처음부터 잘 잡자.

- 저번 위클리미션의 리뷰를 보고 App.js에 useEffect 혹은 useState를 좀 분리해서 상태관리를 하자!!! 했지만... 대차게 실패했습니다 진짜 하나를 바꾸면 열가지를 바꿔야 하더라구요 바로 위의 5번에 개선점과 마찬가지로 뭐든지 초기에 잘 정해서 하는게 정말 중요한것 같습니다. 프로젝트에서 초기구조를 열심히 잡고 작업하던걸 보다가 재 위클리미션을 보니 체감이 더 크게 되는것 같기도 하네요 🫠

<hr>
<p style="text-align: right;"><b>2024-01-02 *덕현멘토님 고생 많으셨습니다!</b></p>
