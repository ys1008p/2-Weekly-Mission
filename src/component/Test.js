import { Link } from "react-router-dom";

import styled from "styled-components";

const Button = styled.button`
  color: black;
  padding: 16px;
`;

function Test() {
  return (
    <div>
      <Link to="/shared">
        <Button>shared</Button>
      </Link>
      <Link to="folder">
        <Button>folder</Button>
      </Link>
    </div>
  );
}

export default Test;
