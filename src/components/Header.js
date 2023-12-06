import "../css/Header.css";

export default function Header({ fileItems }) {
  console.log(fileItems);
  return (
    // items에 값이 있으면 뒤에 값을 출력하겠다는 뜻!
    fileItems && (
      <header>
        {/* 질문) 왜 clickFile의 prk 부모태그인 headerCenter에 묶이지 않고 따로 노는지 궁금합니다. 
        더불어 이미지 시안대로 headerCenter width:188px을 주고 clickFile의 font-size:40px;을 주면 화면 부모가로크기 밖으로 튕겨 나갑니다.. 
        그래서 임의로 30px을 주었습니다. */}
        <div className="headerCenter">
          <img src={fileItems.owner.profileImageSource} />
          <p className="userName">@{fileItems.owner.name}</p>
          <p className="clickFile">{fileItems.name}</p>
        </div>
      </header>
    )
  );
}
