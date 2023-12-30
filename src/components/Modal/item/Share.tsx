import React, { useEffect } from "react";
import { modalItem } from "styles/modal/item";
import kakao from "assets/icons/modal/kakao.png";
import facebook from "assets/icons/modal/facebook.png";
import copyLink from "assets/icons/modal/copyLink.png";
import styled from "styled-components";

declare global {
  interface Window {
    Kakao: any;
  }
}

function Share() {
  const host = window.location.host;
  const userId = 1;
  const folderId = 1;
  const shareUrl = `https://${host}/shared?user=${userId}&folder=${folderId}`;

  const shareToKaKao = () => {
    //key가 존재하지 않아 의도적으로 막아둠.
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error("Kakao SDK not initialized");
      return;
    }

    window.Kakao.init(process.env.KAKAO_KEY);

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkabrary",
        description: "세상의 모든 링크를 저장하세요.",
        imageUrl: "",
        link: {
          mobileWebUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: "보러 가기",
          link: {
            mobileWebUrl: shareUrl,
          },
        },
      ],
    });
  };

  const shareToFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => alert("링크가 복사되었습니다."));
  };

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.KAKAO_KEY);
    }
  }, []);

  return (
    <>
      <modalItem.TitleWrapper>
        <modalItem.Title>폴더 공유</modalItem.Title>
        <modalItem.SubTitle>폴더 명</modalItem.SubTitle>
      </modalItem.TitleWrapper>
      <LinkWrapper>
        <LinkItem>
          <img src={kakao} alt="kakao" onClick={shareToKaKao} />
          <span>카카오톡</span>
        </LinkItem>
        <LinkItem>
          <img src={facebook} alt="facebook" onClick={shareToFacebook} />
          <span>페이스북</span>
        </LinkItem>
        <LinkItem onClick={copyLinkToClipboard}>
          <img src={copyLink} alt="copyLink" />
          <span>링크복사</span>
        </LinkItem>
      </LinkWrapper>
    </>
  );
}

export default Share;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > span {
    color: var(--Linkbrary-gray100, #373740);
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 115.385% */
  }
`;
