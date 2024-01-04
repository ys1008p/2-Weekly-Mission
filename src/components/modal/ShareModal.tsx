import styles from './ModalContents.module.css';

import KakaoIcon from '@/assets/images/icon/kakao.svg';
import FacebookIcon from '@/assets/images/icon/facebook.svg';
import LinkIcon from '@/assets/images/icon/link-share.svg';

interface ShareModalProps {
  folderName: string;
}

const ShareModal = ({ folderName }: ShareModalProps) => {
  return (
    <div>
      <div className={styles.title}>폴더 공유</div>
      <div className={styles.target}>{folderName}</div>
      <ul className={styles.sns}>
        <li>
          <button>
            <img src={KakaoIcon} alt="카카오톡" />
          </button>
          <span>카카오톡</span>
        </li>
        <li>
          <button>
            <img src={FacebookIcon} alt="페이스북" />
          </button>
          <span>페이스북</span>
        </li>
        <li>
          <button>
            <img src={LinkIcon} alt="링크 복사" />
          </button>
          <span>링크 복사</span>
        </li>
      </ul>
    </div>
  );
};

export default ShareModal;
