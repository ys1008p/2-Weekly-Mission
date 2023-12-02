import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  position: ${(props) => (props.$location === "/folder" ? "static" : "sticky")};
  top: 0;
  width: 100%;
  background-color: #edf7ff;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.3rem;
  padding: 0 3.2rem;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 9.4rem;
    max-width: 86.3rem;
  }

  @media (min-width: ${(props) => props.theme.deviceSizes.desktop}) {
    height: 9.4rem;
    max-width: 192rem;
    padding: 0 20rem;
  }
`;
const Logo = styled.img`
  height: 1.6rem;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 2.4rem;
  }
`;
const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Email = styled.span`
  color: var(--gray-1, #373740);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Gnb = { Wrapper, Container, Logo, Account, Email };
