import styled from "styled-components";

interface buttonProps {
  color?: string;
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 400;

  color: ${({ theme }) => theme.gray600};
`;

const Input = styled.input`
  width: 100%;
  padding: 18px 15px;

  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
`;

const Button = styled.button<buttonProps>`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;

  background: ${({ color }) =>
    color ? color : `var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));`};
  color: ${({ theme }) => theme.gray100};
`;

export const modalItem = {
  TitleWrapper,
  Title,
  SubTitle,
  Input,
  Button,
};
