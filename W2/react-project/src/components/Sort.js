import "../styles/Sort.css"
import trash from "../assets/trash.png"
import pen from "../assets/pen.png"
import share from "../assets/share.png"
import styled from "styled-components"


const Button = styled.button`
border-radius: 5px;
  border: 1px solid #6D6AFE;
  background: #FFF;
  padding: 8px 12px`;

function Sort(){

  const handleClickAll = () =>{
      console.log('clicked')
    }

  return(
    <section>
       <div className="sort-bar">
        <Button onClick={handleClickAll}>전체</Button>
        <button>⭐️즐겨찾기</button>
        <button>코딩 팁</button>
        <button>채용 사이트</button>
        <button>유용한 글</button>
        <button>나만의 장소</button>
      </div>
      <div className="sort-edit-bar">
      <h1>유용한 글</h1>
      <div className="sort-edit-buttons">

        <button className="sort-edit-button"><img className="icon" src={share} alt="share"/>공유</button>
        <button className="sort-edit-button"><img className="icon" src={pen} alt="pen"/>이름 변경</button>
        <button className="sort-edit-button"><img className="icon" src={trash} alt="trashcan"/>삭제</button>
      </div>
      </div>
      
    </section>
   
  )
}

export default Sort