import styled from 'styled-components';

const PopOverContainer = styled.div`
  display: ${({ $isOpen }) => $isOpen ? "block" : "none"};
  position: absolute;
  right: -4rem;
  bottom: 5.9rem;
  width: 10rem;
  height: 3.1rem;
  line-height: 3.1rem;
  box-shadow: 0px 2px 8px 0px #3332361a;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-size: 1.4rem;
    text-align: center;
    cursor: pointer;
  }
`;

const Remove = styled.li`
  color: var(--color-light-black);
  background-color: var(--color-white);
`;

const AddFolder = styled.li`
  color: var(--primary-color);
  background-color: var(--sns-bg-color);
`;

function PopOver({ $isOpen }) {
  return (
    <PopOverContainer $isOpen={$isOpen}>
      <ul>
        <Remove>삭제하기</Remove>
        <AddFolder>폴더에 추가</AddFolder>
      </ul>
    </PopOverContainer>
  );
}

export default PopOver;
