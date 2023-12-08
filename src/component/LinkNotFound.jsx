import styled from "styled-components";

const LinkNotFoundMsg = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  margin: 5rem auto;
`;

function LinkNotFound() {
  return <LinkNotFoundMsg>저장된 링크가 없습니다.</LinkNotFoundMsg>;
}

export default LinkNotFound;
