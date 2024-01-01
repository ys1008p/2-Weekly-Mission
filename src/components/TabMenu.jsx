import styled from 'styled-components';
import add from '../assets/btn-add.svg';
import Modal from './Modal';
import { useState } from 'react';

const TabMenuContainer = styled.div`
  position: relative;

  ul {
    display: flex;
    gap: 0 0.8rem;
    list-style-type: none;

    @media screen and (min-width: 375px) and (max-width: 768px) {
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
        border: 1px solid var(--primary);
        background-color: var(--white);
        cursor: pointer;

        @media screen and (min-width: 375px) and (max-width: 768px) {
          font-size: 1.4rem;
        }

        &.active {
          color: var(--white);
          background-color: var(--primary);
        }
      }
    }
  }
`;

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

  @media screen and (min-width: 375px) and (max-width: 768px) {
    display: none;
  }
`;

function TabMenuFunction({ menu, menuActive, handleClick }) {
  const All = {
    id: 'all',
    name: '전체',
  };
  const folderNameArr = [...menu];
  folderNameArr.unshift(All);

  const folderName = folderNameArr.map((item) => (
    <li key={item.id}>
      <button
        type="button"
        className={menuActive === item.id ? 'active' : ''}
        onClick={() => handleClick(item)}
      >
        {item.name}
      </button>
    </li>
  ));
  return folderName;
}

function TabMenu({ menu, menuActive, handleClick, btnOption }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClickOpen = () => setIsOpen(true);

  const handleClickClose = () => setIsOpen(false);

  return (
    <>
      <TabMenuContainer>
        <ul>
          <TabMenuFunction
            menu={menu}
            handleClick={handleClick}
            menuActive={menuActive}
            btnOption={btnOption}
          />
        </ul>
        <Button type="button" onClick={handleClickOpen}></Button>
      </TabMenuContainer>
      <Modal $isOpen={isOpen} onClick={handleClickClose} add={add} menu={menu} menuActive={menuActive}/>
    </>
  );
}

export default TabMenu;
