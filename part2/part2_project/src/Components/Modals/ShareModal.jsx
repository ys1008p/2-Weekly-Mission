import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import { MoreInfo } from './DeleteFolderModal';
import kakaotalkImg from '../../img/kakao.png';
import facebookImg from '../../img/facebook.png';
import linkImg from '../../img/link.svg';

const AllSnsbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const SnsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.6rem;
  color: var(--Linkbrary-gray100, #373740);
  text-align: center;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 0.9375rem; /* 115.385% */
`;

const Logo = styled.img`
  width: 2.625rem;
  height: 2.625rem;

  &.last {
    padding: 0.75rem;
    border-radius: 3rem;
    background: rgba(157, 157, 157, 0.04);
  }
`;

const Imgs = () => {
  return (
    <AllSnsbox>
      <SnsBox>
        <Logo src={kakaotalkImg} alt="카카오톡 공유 하기" />
        <p>카카오톡</p>
      </SnsBox>
      <SnsBox>
        <Logo src={facebookImg} alt="페이스북 공유 하기" />
        <p>페이스북</p>
      </SnsBox>
      <SnsBox>
        <Logo src={linkImg} alt="링크 복사해서 공유 하기" className="last" />
        <p>링크 복사</p>
      </SnsBox>
    </AllSnsbox>
  );
};

export default function ShareModal({ children = '폴더명' }) {
  return (
    <ModalContainer>
      폴더 공유
      <MoreInfo>{children}</MoreInfo>
      <Imgs></Imgs>
    </ModalContainer>
  );
}
