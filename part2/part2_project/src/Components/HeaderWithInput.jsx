import styled from "styled-components";
import linkImg from "../img/link.svg";

const Form = styled.form`
  padding: 5rem 0;
  background: var(--linkbrary-bg, #f0f6ff);
`;

const LinkInputBox = styled.div`
  position: relative;
  width: 50vw;
`;

const Input = styled.input`
  display: flex;
  width: 50vw;
  height: 4.5rem;
  padding: 1rem 1.25rem 1rem 3rem;
  border-radius: 15px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
`;

const Button = styled.button`
  position: absolute;
  text-align: center;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: var(--gra-purpleblue-to-skyblue);
  cursor: pointer;
  color: #f5f5f5;
  text-decoration: none;
  bottom: 0.94rem;
  right: 1rem;
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
        <Button>추가하기</Button>
      </LinkInputBox>
    </Form>
  );
}
