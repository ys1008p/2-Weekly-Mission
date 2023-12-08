import { useState } from "react";
import styled from "styled-components";
import InputModal from "./InputModal";
import DeleteModal from "./DeleteModal";


const ModalLayout = styled.div`
   background-color:rgba(0, 0, 0, 0.1);
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 0;

`



function Modal({selectPopOver,setSelectPopOver}) {
 //selectPopOver가 공유면 인풋모달에 공유 타이틀을 
  return (
    <ModalLayout onClick={()=>{setSelectPopOver(false)}} >
      <DeleteModal/>
    </ModalLayout>
  );
}




export default Modal;
