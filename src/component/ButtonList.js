import styled from 'styled-components';

const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid var(--primary-color);
  font-size: 1.6rem;
  border-radius:0.5rem;
  padding: 0.8rem 1.2rem;
`;

const ButtonBox = styled.div`
display:flex;
justify-content: space-between;
`

const Buttons =styled.div`
  display:flex;
  justify-content: space-between;
  gap:1.2rem;
`

const AddLink = styled.div`
  color: var(--primary-color);
  border:none;
  font-size:3rem;
`

function ButtonList(){
    return(
        <>
        <div>
        <ButtonBox>
          <Buttons>
          <Button>전체</Button>
          <Button>즐겨찾기</Button>
          <Button>코딩 팁</Button>
          <Button>채용 공고</Button>
          <Button>유용한 글</Button>
          <Button>나만의 장소</Button>
          </Buttons>
          <AddLink>+</AddLink>
        </ButtonBox>
        </div>
        </>
    )
}

export default ButtonList 