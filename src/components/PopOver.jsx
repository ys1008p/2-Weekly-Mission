import styled from 'styled-components';
import Modal from './Modal';
import { useState } from 'react';

const PopOverContainer = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: absolute;
  right: -4rem;
  bottom: 2.1rem;
  text-align: center;
  box-shadow: 0px 2px 8px 0px #3332361a;
`;

const Button = styled.button`
  display: block;
  width: 10rem;
  height: 3.1rem;
  line-height: 3.1rem;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;

  &:first-child {
    color: var(--light-gray-100);
    background-color: var(--white);
  }

  &:last-child {
    color: var(--primary);
    background-color: var(--gray10);
  }
`;

function PopOver({ $isOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(null);

  const handleClickOpen = (e, buttonId) => {
    e.preventDefault();
    setIsOpen(true);
    setMode(buttonId);
  };

  const handleClickClose = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const BUTTON = [
    {
      id: 'LinkRemove',
      name: '삭제하기',
    },
    {
      id: 'folderAdd',
      name: '폴더에 추가',
    },
  ];

  return (
    <>
      <PopOverContainer $isOpen={$isOpen}>
        {BUTTON.map((button) => (
          <Button
            key={button.id}
            type="button"
            onClick={(e) => handleClickOpen(e, button.id)}
          >
            {button?.name}
          </Button>
        ))}
      </PopOverContainer>
      <Modal
        $isOpen={isOpen}
        onClick={(e) => handleClickClose(e)}
        LinkRemove={mode === 'LinkRemove'}
        folderAdd={mode === 'folderAdd'}
      />
    </>
  );
}

export default PopOver;
