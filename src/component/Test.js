import { Link } from "react-router-dom";

import styled from "styled-components";

const Div = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 3rem;
`;

const Button = styled.button`
  color: black;
  padding: 16px;
`;
const H2 = styled.h2`
  font-size: 3rem;
`;

function Test() {
  return (
    <>
      <Div>
        <Link to="/shared">
          <Button>shared</Button>
        </Link>
        <Link to="folder">
          <Button>folder</Button>
        </Link>
      </Div>
      <Div>
        <H2>해당 페이지는 테스트용 렌딩페이지입니다 미션과 무관합니다.</H2>
      </Div>
    </>
  );
}

export default Test;
