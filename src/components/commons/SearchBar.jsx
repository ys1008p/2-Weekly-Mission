import styled from "styled-components";
import searchIcon from "../../assets/Search.png";

function SearchBar() {
  return (
    <div>
      <SearchBarContainer>
        <img src={searchIcon} alt="검색 아이콘" />
        <SearchBarInput placeholder="링크로 검색해 보세요." />
      </SearchBarContainer>
    </div>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 1.6rem;
    transform: translateY(-50%);
  }
`;
const SearchBarInput = styled.input`
  background-color: #f5f5f5;
  width: 100%;
  height: 5.4rem;
  border: none;
  border-radius: 1rem;
  padding-left: 4rem;
  margin: 4rem auto;
`;
