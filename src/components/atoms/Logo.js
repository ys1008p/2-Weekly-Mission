import styled from "styled-components"

const Img = styled.img`
  width: 13.3rem;
  height: 2.4rem;
`;

const href = "/index.html"
const Logo = () => {
  
  return (
    <a href={href}>
      <Img src="./images/logo.svg" alt="홈으로 연결된 Linkbrary 로고"/>
    </a>    
  )
}

export default Logo 
