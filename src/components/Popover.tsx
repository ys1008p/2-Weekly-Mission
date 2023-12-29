import { ReactNode, useState } from "react";
import styled from "styled-components";

interface PopoverContentProps {
  title: string;
  fn: () => void;
}
interface PopoverProps {
  children: ReactNode;
  content: PopoverContentProps[];
}

type isVisible = boolean;

function Popover({ children, content }: PopoverProps) {
  const [visible, setVisible] = useState<isVisible>(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Wrapper>
      <button onClick={toggleVisible}>{children}</button>
      {visible && (
        <Contents>
          {content.map((data) => (
            <Item key={data.title} onClick={data.fn}>
              {data.title}
            </Item>
          ))}
        </Contents>
      )}
    </Wrapper>
  );
}

export default Popover;

const Wrapper = styled.div`
  position: relative;
`;

const Contents = styled.div`
  position: absolute;
  top: 100%;
  width: 100px;
  outline: 1px solid transparent;
  box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

const Item = styled.button`
  width: 100%;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  &:hover {
    background-color: ${({ theme }) => theme.gray100};
    color: ${({ theme }) => theme.primary};
  }
`;
