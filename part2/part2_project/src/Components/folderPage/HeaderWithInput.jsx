import styled from 'styled-components';
import linkImg from '../../img/link.svg';
import PrimeryButton from '../sharing/PrimeryButton';

const Form = styled.form`
  padding: 5rem 0;
  background: var(--linkbrary-bg, #f0f6ff);

  @media screen and (max-width: 767px) {
    padding: 5rem 2rem;
  }
`;

const LinkInputBox = styled.div`
  position: relative;
  width: 70vw;
  max-width: 120rem;

  @media screen and (max-width: 1199px) {
    width: 100%;
    max-width: 47rem;
  }
`;

export const Input = styled.input`
  display: flex;
  width: 70vw;
  max-width: 120rem;
  height: 4.5rem;
  padding: 1rem 1.25rem 1rem 3rem;
  border-radius: 15px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);

  &:hover {
    outline-color: var(--linkbrary-primary-color, #6d6afe);
  }

  @media screen and (max-width: 1199px) {
    width: 100%;
    max-width: 47rem;
  }
`;

const Img = styled.img`
  position: absolute;
  bottom: 1.5rem;
  left: 1rem;
`;

export default function HeaderWithInPut() {
  return (
    <Form>
      <Input placeholder="링크를 입력하세요" />
      <LinkInputBox>
        <Img src={linkImg} alt="사슬 이미지" />
        <PrimeryButton>추가하기</PrimeryButton>
      </LinkInputBox>
    </Form>
  );
}
