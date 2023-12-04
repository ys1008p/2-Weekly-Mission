import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 2.4rem 0;
  justify-content: space-between;
`;

const SideBtnContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const H2 = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

const Span = styled.span`
  color: #9fa6b2;
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
`;

const Image = styled.img``;

function UserPersonalFolderSideBar() {
  return (
    <Container>
      <H2>테스트</H2>
      <SideBtnContainer>
        <Span>
          <Image src="img/share.svg" alt="share" />
          공유
        </Span>
        <Span>
          <Image src="img/pen.svg" alt="changeName" />
          이름 변경
        </Span>
        <Span>
          <Image src="img/delete.svg" alt="delete" />
          삭제
        </Span>
      </SideBtnContainer>
    </Container>
  );
}

export default UserPersonalFolderSideBar;
