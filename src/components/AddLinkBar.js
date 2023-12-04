import styled from 'styled-components';

const Container = styled.div`
  padding: 6rem 0 9rem 0;

  @media screen and (min-width:375px) and (max-width:768px) {
    padding: 2.4rem 0 4rem 0;
  }
`
const AddLink = styled.div`
  position: relative;
  width: 80rem;
  margin: 0 auto;

  @media screen and (max-width:1124px) {
    width: 100%;
  }
  
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: url('../../assets/ico-link.png') no-repeat;

    @media screen and (min-width:375px) and (max-width:768px) {
      left: 1rem;
    }
  }

  input {
    width: 80rem;
    padding: 2.2rem 5.2rem;
    border-radius: 15px;
    border: 1px solid var(--color-blue);
    color: var(--color-middle-gray);
    font-size: 1.6rem;
    outline: none;

    @media screen and (max-width:1124px) {
      width: 100%;
    }

    @media screen and (min-width:375px) and (max-width:768px) {
      padding: 1.8rem 3.4rem;
      font-size: 1.4rem; 
    }
  }
`
const AddButton = styled.a`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 8rem;
  height: 3.7rem;
  cursor: pointer;
  background-image: linear-gradient(135deg, #6d6afe 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: var(--color-very-light-gray);
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;

  @media screen and (min-width:375px) and (max-width:768px) {
    right: 1rem;
  }
`

function AddLinkBar(){
  return (
    <Container>
      <AddLink>
        <input type="text" placeholder="링크를 추가해보세요"/>
        <AddButton Link to="/">
          <span>추가하기</span>
        </AddButton>
      </AddLink>
    </Container>
  )
}

export default AddLinkBar;