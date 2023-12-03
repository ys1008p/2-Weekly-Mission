import searchImg from "../img/Search.svg";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 2.5rem;
`;

const Img = styled.img`
  position: absolute;
  bottom: 1.1rem;
  left: 1rem;
`;

const Input = styled.input`
  margin: 0;
  padding: 1rem 2.5rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  background: #f5f5f5;
  border: none;
`;

export default function SearchBox() {
  return (
    <Form>
      <Img src={searchImg} alt="돋보기 사진" />
      <Input placeholder="링크를 검색해보세요" type="text" />
    </Form>
  );
}
