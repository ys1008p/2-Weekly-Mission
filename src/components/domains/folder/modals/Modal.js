import { useState } from "react";
import styled from "styled-components";


const ModalLayout = styled.div`
  width: 36rem;
  padding: 4rem 3.2rem;
  border:1px solid black;
  background-color: #ffffff;
  border-radius:1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  & h3 {
    font-size: 2rem;
  }
`
  const ModalButtonClose =styled.button`
  width: 2.4rem;
    height: 2.4rem;
    border-radius:100%;
    background-color:#E7EFFB;
    color:#9FA6B2;
    border: none;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  `

function Modal() {
    const [content, setContent] = useState()
  return (
    <ModalLayout>
      <ModalButtonClose>X</ModalButtonClose>
      <div>
        <h2>폴더이름</h2>
        <div>컨텐츠</div>
      </div>
    </ModalLayout>
  );
}

//모달뼈대를 미리만든다
//각 모달의 데이터를 빼서 모아둔다
//모달컴포넌트에 스테이트를 만들고 해당 데이터를 불러오는 핸들링함수를 만든다
// 모달 스테이트에 불러오 데이터를 저장한다
// 저장한 데이터를 이용해서 컨텐츠 컴포넌트를 만든다 


export default Modal;
