import style from '../../styles/Modal/ShareModal.module.css';
import xbutton from '../../assets/x.svg';
import facebook from '../../assets/facebook.svg';
import kakao from '../../assets/Kakao.svg';
import link from '../../assets/link.svg';

const ShareModal = ({description, onClick} : {description:string, onClick:() => void}) => {
  return(
    <div className={style.container} onClick={onClick}>
      <div className={style.modal}>
        <div className={style.modalContent}>
          <div className={style.contentContainer}>
            <p className={style.title}>공유하기</p>
            <p className={style.description}>{description}</p>
          </div>
          <div className={style.shareContainer}>
            <button className={style.shareButton}>
              <div className={style.kakaoButton}><img src={kakao} alt="kakao" /></div>
              <p>카카오톡</p>
            </button>
            <button className={style.shareButton}>
              <div className={style.facebookButton}><img src={facebook} alt="facebook" /></div>
              <p>페이스북</p>
            </button>
            <button className={style.shareButton}>
              <div className={style.linkButton}><img src={link} alt="" /></div>
              <p>링크 복사</p>
            </button>
          </div>
        </div>
        <button className={style.xButton} onClick={onClick}><img src={xbutton} alt="x" /></button>
      </div>
    </div>
  )
};

export default ShareModal;
