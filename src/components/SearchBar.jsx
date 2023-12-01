import React from "react";
import search from "assets/icons/Search.svg";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <InputContainer>
      <img src={search} alt="Search" />
      <InputBar className="searchBar" placeholder="링크로 검색해 보세요." />
    </InputContainer>
  );
};

export default SearchBar;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  & img {
    position: absolute;
    top: 50%;
    left: 1.6rem;
    transform: translateY(-50%);
  }
`;
const InputBar = styled.input`
  width: 100%;
  padding-left: 4rem;
  border-radius: 1rem;
  background: #f5f5f5;
  height: 5.4rem;
  border: none;
`;
