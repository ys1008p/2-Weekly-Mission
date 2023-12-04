import styled from "styled-components";

const HeaderSectionContainer = styled.section`
  padding: 6rem 32rem 9rem;
  background-color: #f0f6ff;
  text-align: center;
  display: flex;
  justify-content: center;

  @media all and (max-width: 1124px) {
    padding: 6rem 3.2rem 9rem;
  }
`;

const HeaderSectionForm = styled.form`
  position: relative;

  @media all and (max-width: 1124px) {
    width: 100%;
  }
`;

const HeaderSectionInput = styled.input`
  width: 100%;
  padding: 2.2rem 2rem;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  min-width: 80rem;

  &::placeholder {
    background-image: url(img/link.svg);
    background-size: contain;
    background-position: 0.1rem center;
    background-repeat: no-repeat;
    text-align: left;
    padding-left: 3rem;
  }

  &::focus {
    outline: none;
    border: 3px solid #6d6afe;
  }

  @media all and (max-width: 1124px) {
    min-width: 0;
  }
`;

const HeaderSectionButton = styled.button`
  padding: 1rem 1.6rem;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 1.6rem;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  position: absolute;
  right: 2.2rem;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;

function HeaderSearchSection() {
  return (
    <HeaderSectionContainer>
      <HeaderSectionForm>
        <HeaderSectionInput type="text" placeholder="링크를 추가해 보세요" />
        <HeaderSectionButton type="submit">추가하기</HeaderSectionButton>
      </HeaderSectionForm>
    </HeaderSectionContainer>
  );
}

export default HeaderSearchSection;
