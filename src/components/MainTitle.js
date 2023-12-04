import styled from 'styled-components';
import share from '../assets/btn-share.png';
import pen from '../assets/btn-pen.png';
import del from '../assets/btn-delete.png';

const Container = styled.div`
  position: relative;

  h2 {
    margin: 2.4rem 0;
    padding: 0;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 2.8rem;
    letter-spacing: -0.02rem;
  }
`
const ButtonOption = styled.div`
  display: ${({ $btnOption, $menuActive }) => $btnOption === true && $menuActive !== 'all' ? "block" : "none"};
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (min-width:375px) and (max-width:768px) {
    position: static;
    margin: 0 0 2rem 0;
  }

  button {
    position: relative;
    padding: 0 0 0 2.2rem;
    border: none;
    background-color: var(--color-white);
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.6rem;
    color: var(--color-middle-gray);

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 1.8rem;
      height: 1.8rem;
    }

    &:first-child::before {
      background: url('${share}') no-repeat center;
    }

    &:nth-child(2)::before {
      background: url('${pen}') no-repeat center;
    }

    &:last-child::before {
      background: url('${del}') no-repeat center;
    }
  }

  button + button {
    margin: 0 0 0 1.2rem;
  }
`

function MainTitle({ 
  btnOption,
  menuActive,
  title
 }){
  return ( 
    <Container>
      <h2>{title}</h2>
      <ButtonOption 
      $btnOption={btnOption} 
      $menuActive={menuActive}
      >
        <button type="button">공유</button>
        <button type="button">이름 변경</button>
        <button type="button">삭제</button>
      </ButtonOption>
    </Container>
  )
}

export default MainTitle;