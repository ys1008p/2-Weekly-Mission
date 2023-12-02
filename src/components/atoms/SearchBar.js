import styled from "styled-components"

const Div = styled.div`
  position: relative;
`
const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  top: 1.9rem;
  left: 1.6rem;
  @media (max-width: 767px) {
    top: 1.4rem;
  }
`
const Input = styled.input`
  width: 100%;
  height: 5.4rem;
  padding: 1.5rem 1.6rem 1.5rem 4.2rem;
  border-radius: 1rem;
  justify-content: space-between;
  background-color: var(--linkbrary-light-gray);
  color: var(--lightgray-text);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  text-align: left;
  border-style: none;
  outline: none;


  @media (max-width: 767px) {
    height: 4.3rem;
    padding: 1.3rem 1.6rem;
    font-size: 1.4rem;
    line-height: 1.7rem;
    padding-left: 3.8rem;
  }
`;



const SearchBar = () => {
  
  return (
    <Div>
      <Icon src="./images/search.svg" alt="돋보기 아이콘" />
      <Input type="search" name="search" placeholder="링크를 검색해보세요"></Input>    
    </Div>
  )
}

export default SearchBar