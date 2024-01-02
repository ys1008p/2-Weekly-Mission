import "../styles/Sort.css"
import trash from "../assets/trash.png"
import pen from "../assets/pen.png"
import share from "../assets/share.png"
import styled from "styled-components"
import Modals from "./Modals"
import CardList from "./CardList"
import { useState } from "react"
import {getInfoEachFolder} from "../api"

const Button = styled.button`
border-radius: 5px;
  border: 1px solid #6D6AFE;
  background: #FFF;
  padding: 8px 12px;`;


export default function Sort(){
  const [order, setOrder] = useState(false);
  
  const uerSortFavourite = async()=>{

    try{
      const result = await getInfoEachFolder();
      console.log(result)
    } catch(error){
      console.log('failed')
    }
  
  }

  const handleClickAll = () =>{
      console.log('all')
    }
  
  const handleFavourite = () =>{
    console.log('favourite')
    uerSortFavourite()
  }

  const handleShare = () => {
    console.log('share')
  }

  const handleEditFolderName = () => {
    console.log('edit')
  }

   const handleDelete = ()=>{
    console.log('delete')
  }
  return(
    <>
    <section>
       <div className="sort-bar">
        <Button onClick={handleClickAll}>전체</Button>
        <button onClick={handleFavourite}>⭐️즐겨찾기</button>
        <button>코딩 팁</button>
        <button>채용 사이트</button>
        <button>유용한 글</button>
        <button>나만의 장소</button>
      </div>
      <div className="sort-edit-bar">
      <h1>전체</h1>
      <div className="sort-edit-buttons">
        <button className="sort-edit-button" onClick={handleShare}>
        <img className="icon" src={share} alt="share"/>공유</button>
        <button className="sort-edit-button" onClick={handleEditFolderName}><img className="icon" src={pen} alt="pen"/>이름 변경</button>
        <button className="sort-edit-button" onClick={handleDelete}><img className="icon" src={trash} alt="trashcan"/>삭제</button>
      </div>
      </div>
    </section>
    <CardList/>
   </>
  )
}
