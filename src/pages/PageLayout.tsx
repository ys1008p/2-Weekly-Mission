import React, { ChangeEvent, ReactNode } from "react";
import styled from "styled-components";
import SearchBar from "components/SearchBar";

interface PageFormProps {
  children: ReactNode;
  search?: string;
  setSearch?: (value: string) => void;
}

const PageLayout: React.FC<PageFormProps> = ({ search, setSearch, children }) => {
  const handleSearchBar = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (setSearch) {
      setSearch(value);
    }
  };

  const initialState = () => {
    if (setSearch) setSearch("");
  };

  return (
    <Article>
      <SearchBar value={search} handleSearchBar={handleSearchBar} initialState={initialState} />
      {children}
    </Article>
  );
};

export default PageLayout;

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
