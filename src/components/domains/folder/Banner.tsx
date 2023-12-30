import styled from "styled-components";
import { ASSETS_URL } from "../../../constants.ts";

const BannerLayout = styled.section`
  background-color: var(--gray-bg-color);
  padding: 6rem 3.2rem 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BannerBox = styled.div`
  width: 80rem;
  position: relative;

  & input {
    width: 100%;
    height: 7rem;
    border-radius: 1.5rem;
    border: 1px solid var(--primary-color);
    padding: 0 5rem;
  }

  & img {
    position: absolute;
    left: 2rem;
    top: 35%;
  }

  & button {
    position: absolute;
    padding: 1rem 1.5rem;
    background-image: linear-gradient(
      90deg,
      rgba(109, 106, 254, 1),
      rgba(106, 227, 254, 1)
    );
    border: none;
    border-radius: 0.8rem;
    color: var(--white-color);
    font-size: 1.4rem;
    line-height: 16.8px;
    font-weight: 600;
    cursor: pointer;
    right: 2rem;
    top: 25%;
  }
`;

function FolderAddLinkInput() {
  return (
    <BannerLayout>
      <BannerBox>
        <input placeholder="링크를 추가해 보세요" />
        <img src={`${ASSETS_URL}/images/linkIcon.png`} alt="링크 아이콘" />
        <button type="button">추가하기</button>
      </BannerBox>
    </BannerLayout>
  );
}

export default FolderAddLinkInput;
