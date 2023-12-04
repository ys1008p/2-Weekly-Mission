import styled from "styled-components";
import TabMenu from './TabMenu';
import add from '../assets/btn-add.png';

const Container = styled.div`
  position: relative;

  ul {
    display: flex;
    gap: 0 0.8rem;
    list-style-type: none;
    margin: 4rem 0 0;

    @media screen and (min-width:375px) and (max-width:768px) {
      flex-wrap: wrap;
      gap: 1.2rem 0.8rem;
    }

    li {
      line-height: 1.9rem;
  
      button {
        display: block;
        padding: 0 1.2rem;
        height: 3.5rem;
        font-size: 1.6rem;
        border-radius: 5px;
        border: 1px solid var(--color-blue);
        background-color: var(--color-white);
        cursor: pointer;
  
        @media screen and (min-width:375px) and (max-width:768px) {
          font-size: 1.4rem;
        }  
      }
  
      button.active {
        color: var(--color-white);
        background-color: var(--color-blue);
      }
    }
  }
}`

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 1.6rem;
  height: 1.6rem;
  border: none;
  cursor: pointer;
  background: url('${add}') no-repeat;
`

function Tab({
  menu, 
  menuActive, 
  handleClick,
  btnOption
}) {
  return (
    <Container>
      <ul>
        <TabMenu
          menu={menu}
          handleClick={handleClick}  
          menuActive={menuActive}
          btnOption={btnOption}
        />
      </ul>
      <Button type="button"></Button>
    </Container>
  )
}

export default Tab;