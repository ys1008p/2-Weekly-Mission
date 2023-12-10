import styled from "styled-components";

const PopOverLayout =styled.div`
 display: flex;
 flex-direction: column;
position:absolute;
box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
z-index:10;
right: 1.5rem;
top: 3rem;

`
const PopOverButton =styled.button`
  width: 10rem;
    height: 3.1rem;
    font-size: 1.4rem;
    border: none;
    background-color: #ffffff;
    &:hover{
        background-color: rgba(231, 239, 251, 1);
        color: rgba(109, 106, 254, 1);
    }
`

function PopOver({showPopOver}){
   
    return(
        <>
        {
            showPopOver?
        <PopOverLayout >
            <PopOverButton>삭제하기</PopOverButton>
            <PopOverButton>폴더에 추가</PopOverButton>
        </PopOverLayout>
        : null
    }
        </>
    )
}

export default PopOver
