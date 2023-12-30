import { ChangeEvent } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";

interface SearchBarProps {
  initialState?: () => void;
  handleSearchBar: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

interface SearchBarIconProps {
  left?: string;
  right?: string;
  $isClose?: boolean;
  $iconType: "search" | "close";
}

const SearchBar: React.FC<SearchBarProps> = ({ value, handleSearchBar, initialState }) => {
  return (
    <>
      <InputContainer>
        <StyledIcon $iconType="search" as={SearchIcon} left="1.6rem" />
        <InputBar
          value={value ?? ""}
          className="searchBar"
          placeholder="링크로 검색해 보세요."
          onChange={handleSearchBar}
        />
        <StyledIcon $iconType="close" as={CloseIcon} right="1.6rem" onClick={initialState} $isClose={!!value?.length} />
      </InputContainer>
      {value && (
        <SearchResult>
          <SearchKeyword>{value}</SearchKeyword>
          으로 검색한 결과 입니다.
        </SearchResult>
      )}
    </>
  );
};

export default SearchBar;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledIcon = styled.svg<SearchBarIconProps>`
  position: absolute;
  top: 50%;
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  transform: translateY(-50%);

  display: ${({ $iconType, $isClose }) => ($iconType === "close" && !$isClose ? "none" : "block")};
`;

const InputBar = styled.input`
  width: 100%;
  padding-left: 4rem;
  border-radius: 1rem;
  background: #f5f5f5;
  height: 5.4rem;
  border: none;
`;

const SearchResult = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.gray600};
`;

const SearchKeyword = styled.span`
  color: #373740;
`;
