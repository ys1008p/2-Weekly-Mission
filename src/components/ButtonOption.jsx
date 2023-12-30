import styled from 'styled-components';
import share from '../assets/btn-share.png';
import pen from '../assets/btn-pen.png';
import del from '../assets/btn-delete.png';
import Modal from './Modal';
import { useState } from 'react';

const ButtonOptionContainer = styled.div`
  position: relative;
`;

const Title = styled.h2`
  margin: 2.4rem 0;
  padding: 0;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 2.8rem;
  letter-spacing: -0.02rem;
`;

const Option = styled.div`
  position: relative;
  display: ${({ $btnOption, $menuActive }) =>
    $btnOption === true && $menuActive !== 'all' ? 'block' : 'none'};
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    position: static;
    margin: 0 0 2rem 0;
  }
`;

const Button = styled.button`
  margin: 0 1.2rem 0 0;
  padding: 0 0 0 2.2rem;
  border: none;
  background-color: var(--white);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
  color: var(--gray60);
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 1.8rem;
    height: 1.8rem;
  }

  &:first-child {
    background: url('${share}') no-repeat left center;
  }

  &:nth-child(2) {
    background: url('${pen}') no-repeat left center;
  }

  &:last-child {
    margin: 0;
    background: url('${del}') no-repeat left center;
  }
`;

function ButtonOption({ title, menuActive, btnOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(null);

  const handleClickOpen = (buttonId) => {
    setIsOpen(true);
    setMode(buttonId);
  };

  const handleClickClose = () => setIsOpen(false);

  const BUTTON = [
    {
      id: 'share',
      name: '공유',
    },
    {
      id: 'edit',
      name: '이름 변경',
    },
    {
      id: 'folderRemove',
      name: '삭제',
    },
  ];

  return (
    <>
      <ButtonOptionContainer>
        <Title>{title}</Title>
        <Option $menuActive={menuActive} $btnOption={btnOption}>
          {BUTTON.map((button) => (
            <Button
              key={button.id}
              type="button"
              onClick={() => handleClickOpen(button.id)}
            >
              {button?.name}
            </Button>
          ))}
        </Option>
      </ButtonOptionContainer>
      <Modal
        $isOpen={isOpen}
        onClick={handleClickClose}
        edit={mode === 'edit'}
        share={mode === 'share'}
        folderRemove={mode === 'folderRemove'}
      />
    </>
  );
}

export default ButtonOption;
