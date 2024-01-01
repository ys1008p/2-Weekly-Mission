import styled from "styled-components";

const StyledLinkSearchInput = styled.input`
  width: 100%;
  padding: 1.5rem 1.6rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  border: none;
  margin-bottom: 40px;

  &:focus {
    outline: none;
    border: 3px solid #6d6afe;
  }

  &::placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: contain;
    background-position: 0.1rem center;
    background-repeat: no-repeat;
    text-align: left;
    padding-left: 3rem;
  }
`;

function LinkSearchInput() {
  return <StyledLinkSearchInput type="text" placeholder="링크를 검색해보세요." />;
}

export default LinkSearchInput;
