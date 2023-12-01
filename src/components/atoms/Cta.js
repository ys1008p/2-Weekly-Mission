import styled from "styled-components"

const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  cursor: pointer;
  background-image: var(--gra-purpleblue-to-skyblue);
  border-radius: 0.8rem;
  color: var(--linkbrary-light-gray);
  font-size: 1.8rem;
  font-weight: 600;
  width: 12.8rem;
`;

const Cta = ({href, children}) => {
  
  return (
    <A href={href}>
      <span>{children}</span>
    </A>    
  )
}

export default Cta