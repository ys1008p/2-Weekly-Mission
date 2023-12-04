import styled from "styled-components"

const Img = styled.img`
  width: 13.3rem;
  height: 2.4rem;
  @media (max-width: 767px) {  
  ${({ parent }) => {
    if(parent === "gnb"){
      return `
      width: 8.8rem;
      height: 1.6rem;
    `}
  }}
  }
`;

const href = "/index.html"

const Logo = ({parent}) => {
  return (
    <a href={href}>
      <Img parent={parent} src="./images/logo.svg" alt="홈으로 연결된 Linkbrary 로고"/>
    </a>    
  )
}

export default Logo 
