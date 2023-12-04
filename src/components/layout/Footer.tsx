import styles from './Footer.module.css';

import Facebook from '@/assets/images/icon/akar-icons_facebook-fill.svg';
import Twitter from '@/assets/images/icon/akar-icons_twitter-fill.svg';
import Youtube from '@/assets/images/icon/akar-icons_youtube-fill.svg';
import Instagram from '@/assets/images/icon/ant-design_instagram-filled.svg';

import SnsButton from '@/components/button/SnsButton';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <span className={styles.company}>©codeit - 2023</span>
      <span className={styles.link}>
        <a href="/">Privacy Policy</a>
        <a href="/">FAQ</a>
      </span>
      <span className={styles.sns}>
        <SnsButton
          url="https://www.facebook.com/?locale=ko_KR"
          icon={Facebook}
          altText="페이스북"
        />
        <SnsButton
          url="https://twitter.com/?lang=ko"
          icon={Twitter}
          altText="트위터"
        />
        <SnsButton
          url="https://www.youtube.com"
          icon={Youtube}
          altText="유튜브"
        />
        <SnsButton
          url="https://www.instagram.com/"
          icon={Instagram}
          altText="인스타그램"
        />
      </span>
    </div>
  </footer>
);

export default Footer;
