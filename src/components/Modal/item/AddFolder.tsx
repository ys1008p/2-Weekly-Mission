import React, { useState } from "react";
import styled, { css } from "styled-components";
import { modalItem } from "styles/modal/item";

interface LinkProps {
  selected: boolean;
}

function AddFolder() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelected = (link: string) => {
    setSelected(link);
  };
  return (
    <>
      <modalItem.TitleWrapper>
        <modalItem.Title>폴더에 추가</modalItem.Title>
        <modalItem.SubTitle>링크 주소</modalItem.SubTitle>
      </modalItem.TitleWrapper>
      <div>
        {["코딩팁", "채용 사이트", "유용한 글", "나만의 장소"].map((link, index) => (
          <Link key={index} selected={selected === link} onClick={() => handleSelected(link)}>
            {link} <LinkCount>7개 링크</LinkCount>
          </Link>
        ))}
      </div>
      <modalItem.Button>추가하기</modalItem.Button>
    </>
  );
}

export default AddFolder;

const Link = styled.div<LinkProps>`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;

  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  border-radius: 8px;

  &:hover {
    background: var(--Linkbrary-bg, #f0f6ff);
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }

  ${({ selected }) =>
    selected &&
    css`
      background: var(--Linkbrary-bg, #f0f6ff);
      color: ${({ theme }) => theme.primary};
    `}
`;

const LinkCount = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
