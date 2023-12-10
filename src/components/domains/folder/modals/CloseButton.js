import styled from "styled-components"
import { ASSETS_URL } from "../../../../constants"

const Button = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: #e7effb;
    color: #9fa6b2;
    padding: 0.7rem;
    cursor: pointer;
    position: absolute;
    top: 1.6rem;
    right:  1.6rem;
  
`

function CloseButton(){
    return(
        <Button><img src={ASSETS_URL + "/images/closeIcon.png"} alt="닫기 아이콘" /></Button>
    )
}

export default CloseButton