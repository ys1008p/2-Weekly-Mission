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

/* 현재 정리가 되고있지 않은 부분은 지난번에도 말씀주셨던 부분인데요, Sort, CardList, Modal 컴포넌트가 있을 때, 세 컴포넌트를 어디서 어떻게 조건에 맞게 걸러내고 모달창을 띄워야 하는지 정리가 안되고 있습니다. 

1. 즐겨찾기 버튼을 누르면 -> folder_id 의 favorite 이 true인 요소만 배열로 뺀다.(filter)
1-1. 이 때 api의 folder_id를 어떻게 받아오는지 잘 모르겠습니다.

2. 공유, 이름변경, 삭제 버튼을 누르면, 모달창이 뜬다. 를 
{handleEditFolderName ?  <Modals folderName='폴더 이름 변경' title='유용한 팁' buttonName='변경하기'/> : null}
처럼 사용했는데 버튼이 눌리지 않았는데 모달이 뜹니다. 
*/

export default function Sort(){
  
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
        {handleEditFolderName ?  <Modals folderName='폴더 이름 변경' title='유용한 팁' buttonName='변경하기'/> : null}
        <button className="sort-edit-button" onClick={handleDelete}><img className="icon" src={trash} alt="trashcan"/>삭제</button>
      </div>
      </div>
    </section>
    <CardList/>
   </>
  )
}
