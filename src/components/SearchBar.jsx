import styled from 'styled-components';
import search from '../assets/ico-search.png';

const Search = styled.div`
  position: relative;
  margin: 0 0 4rem 0;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 1.7rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.6rem;
    height: 1.6rem;
    background: url('${search}') no-repeat;
  }

  input {
    width: 100%;
    padding: 1.5rem 4.2rem;
    outline: none;
    border: none;
    border-radius: 1rem;
    font-size: 1.6rem;
    color: var(--color-gray);
    background-color: var(--color-very-light-gray);
  }
`;

function SearchBar() {
  return (
    <Search>
      <input type="search" placeholder="링크를 검색해 보세요." />
    </Search>
  );
}

export default SearchBar;
