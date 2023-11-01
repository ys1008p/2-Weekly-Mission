<img src='./img/README.md/codeit.png'>
<br>
<br>
<br>

<h1 style="text-align: center;">Codeit Weekly Mission</h1>
<p style="text-align: center;"><b>Front-end Developer Course</b></p>
<p style="text-align: center;">Codeit 스프린트과정을 하며 한 주 한 주 위클리미션을 기록하는  문서입니다.<br> 해당 문서는 <b>각 파일들의 설명과 포인트</b> , <b>해당 문서의 주차별 위치</b> , <b>스스로 생각하는 개선점</b> 등이 쓰여있습니다. </p>
<br>

## 1. 각 파일들의 설명과 포인트

### 🚀 Html Part

<hr>

- 👀 index.html  
  => 메인이 되는 랜딩페이지이며 현재시점( **Week2** )으로 `a`` 태그를 활용한 클릭이벤트( 로고 , 로그인 , 링크추가하기 , 그 외 Footer-bar ) 가 구현되어있습니다.
- 👀 signin.html  
  => 로그인 페이지이며 회원 가입하기 텍스르를 누를시 **' singup '** 페이지로 전환됩니다. 또 `input`에 아이콘을 `position` 및 `transform` 을 사용하여 구현하였습니다. `input`이 `focus` 될 시 테두리색상이 바뀌는것도 재미있는요소 입니다. :>

- 👀 singup.html  
  => 회원가입 페이지이며 ' **signin.html** '과 동일한 디자인에 비밀번호 확인 `input`이 추가되었습니다. 재밌는점은 **eyes_icon** 이 눈을 뜨고있는 형태로 변경하였는데 `input`안의 텍스트가 ' **signin.html** ' 에서는 안 보이지만 ' **sing.up.html** ' 에서는 텍스트가 보입니다.

### 🚀 Css Part

<hr>

- 👀 footer/header/main.css  
  => **' index.html '** 의 Style Sheet 입니다. 앞으로 볼 전체적인 **Css 파일**에서 각 섹션의 `container` 혹은 **' 공통 '** 된 스타일을 가진 요소에 `class` 와 `id` 를 부여해줬으며 `item` 들은 `CSS선택자` 를 유연하게 사용하였습니다. 또한 재밌는포인트는 각각의 섹션들은 최대크기를 가지고있으며 ' ctrl+마우스휠 '을 사용하여 크기를 아무리 줄여도 최대크기 밖으로는 안 나간다는 점입니다. 그 외 nav-bar의 고정 등등이 있겠네요

- 👀 singinup.css  
  => **' signin.html '** 과 **' signup.html '** 은 `input`이 하나만 추가 된다는걸 제외하면 각 각 똑같은 디자인과 똑같은 배치를 가지고있습니다. 그리하여 하나의 **' Style Sheet '** 로 통일하였으며 각 각 똑같은 상단여백을 가지고있다는 포인트가있습니다.

- 👀 mediaQuery.css  
  => **Reset** / **html,body** / **:root** 와 같은 전역에서 사용하는 style들을 담고있습니다.

- 👀 mediaQuery.css  
  => 3주차에 배울 내용이지만 1주차 Weekly Mission 심화미션(html의 font-size에 따라 전체요소의 크기가 달라지게 만들어보세요)을 잘못이해하여 만들었습니다. 3주차에 수정예정입니다. ~~지금은 쓸모없는파일 ㅠㅠ~~

### 🚀 Extra Point

<hr>

- 👀 img , svg 디렉토리 추가설명  
  => 각 디렉토리 오픈시 처음으로 나오는 `png` , `svg` 파일들은 **랜딩페이지**의 png와 svg파일들 입니다. 그 `signin.html` 혹은 `signup.html` 등등 랜딩페이지 이외 소스파일들은 각 각 `img`, `svg` 디렉토리 안의 다른 디렉토리(ex. read.md 디렉토리)로 구분되어있습니다.

## 2. 각 주차별 체크박스

> ✍️ 각 주차별로 체크의 위치가 변경됩니다. 해당 체크가 있는곳이 지금 읽고계시는 read.md의 내용이라고 보시면 되겠습니다.

- [ ] Week 1
- [x] Week 2
- [ ] Week 3
- [ ] Week 4
- [ ] Week 5
- [ ] Week 6
- [ ] Week 7
- [ ] Week 8
- [ ] Week 9
- [ ] Week 10
- [ ] Week 11
- [ ] Week 12

## 3. 스스로 생각하는 개선점

혼잣말 느낌으로 써서 난해할수있습니다...😭

1. CSS에서 공통된 목록의 Class를 조금 더 잘 써야하지않을까...?

- signin.html 을 작성하면서 느낀부분인데 처음 password 부분에서 eyes_icon 위치를 고정하는것에 조금 혼란을 느꼈다... 그러다가 일단 다른것부터 만들자 하고 signup.html을 만들던 중간에 eyes_icon의 문제점을 알아차려버렸다. 바로 input inline_style에 margin_bottom 값을 줘서 포지션이나 트랜스폼같은 옵션이 input요소만 아니라 input에 추가된 공백범위까지 포함하여 움직이고 있던것 ! 신나게 고치고나서 나중에와서 보니깐 signup 에서만 고쳐졌지 signin 에서는 안 고쳐져있었다... 문제는 두개의 html 모두다 한 개의 css를 공통적으로 쓰다보니깐 나도 모르게 signup.html inline_style만 수정하고 둘 다 됐겠지~ 하고 착각해버린것... 이번에는 빨리 고쳐서 다행이지만 만약 내가 발견 못했거나 실무에서 실수해서 이대로 배포가 된다면...? 앞으로 좀 더 생각하고 사용해야겠다.

2. Html 태그로 자식,자손 선택자를 많이 사용하는것은 과연 옳은가
   > ex ) .class section div p span { }

- 지금에서야 생각해보면 내가 배치한 레이아웃에 이미 정해진 위클리미션 디자인이라 변할일은 없겠지만 나중에가서 디자인한것의 레이아웃을 갈아버린다거나 하면 좀 난감해지지 않을까? 아직까진 솔직히 잘 모르겠다... 한번 크게 터져봐서 혼란스러워봐야지 느낄듯

3. Commit을 언제마다 해야할까 ?

- 랜딩페이지와 로그인 회원가입페이지의 경우 Git 강의를 듣기전에 다 만들어놔서 Commit을 활용을 못했으나 그 이후의 README.md 라던가 각종 CSS수정을하며 Commit을 남발하는 나를 보게되었다... 근데 갑자기 떠오른생각이 ' 이렇게 ... 많이 사용해도 되나...? '
  조금 도를 넘게 사용하는건 아닌가 ? 그렇다고 사용을 안하면 이 부분 부분을 통짜로 저장을해야하는가 ? 의문이였다 ㅎ-ㅎ.. 아직
  실무경험이 없기에 그런걸까? 감이 잘 안잡힌다.

<hr>
<p style="text-align: right;"><b>2023-10-23</b></p>
