import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const PageForm = ({ children }) => {
  return (
    <Article>
      <SearchBar />
      {children}
    </Article>
  );
};

export default PageForm;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
  max-width: 106rem;
  gap: 4rem;

  @media (max-width: 1124px) {
    padding: 0 32px;
  }
`;
