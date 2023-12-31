import React, { useState, FC } from "react";
import styled from "styled-components";
import kakaoShare from "../../../assets/Kakao-share.png";
import facebookShare from "../../../assets/Facebook-share.png";
import linkShare from "../../../assets/link-share.png";

interface ShareButtonsProps {
  folderId?: number;
}

const ShareButtons: FC<ShareButtonsProps> = ({ folderId }) => {
  const [copied, setCopied] = useState(false);

  const shareLink = `${window.location.origin}/shared?user=1&folder=${folderId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
  };

  const resetCopiedStatus = () => {
    setCopied(false);
  };

  return (
    <ModalShareSNS>
      <ShareSNS
        href={`https://www.kakaotalk.com/sharer/kakao?u=${encodeURIComponent(shareLink)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShareIcon src={kakaoShare} alt="kakao share" />
        카카오톡
      </ShareSNS>
      <ShareSNS
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShareIcon src={facebookShare} alt="facebook share" />
        페이스북
      </ShareSNS>
      <ShareLink onClick={copyToClipboard} onMouseLeave={resetCopiedStatus}>
        <ShareIcon src={linkShare} alt="linkshare" />
        {copied ? "복사 완료!" : "링크 복사"}
      </ShareLink>
    </ModalShareSNS>
  );
};

export default ShareButtons;

const ModalShareSNS = styled.div`
  display: flex;
  gap: 3.2rem;
`;

const ShareIcon = styled.img`
  width: 4rem;
  height: 4rem;
`;

const ShareSNS = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-decoration: none;
  color: var(--gray-80-color);
  font-size: 1.3rem;
`;

const ShareLink = styled.button`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-decoration: none;
  color: var(--gray-80-color);
  font-size: 1.3rem;
`;
