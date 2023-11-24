import Facebook from '@/assets/images/icon/akar-icons_facebook-fill.svg';
import Twitter from '@/assets/images/icon/akar-icons_twitter-fill.svg';
import Youtube from '@/assets/images/icon/akar-icons_youtube-fill.svg';
import Instagram from '@/assets/images/icon/ant-design_instagram-filled.svg';
import Sns from '@/components/button/Sns';

function Footer() {
  return (
    <footer>
      <div>
        <span className="company">©codeit - 2023</span>
        <span className="link">
          <a href="/">Privacy Policy</a>
          <a href="/">FAQ</a>
        </span>
        <span className="sns">
          <Sns
            url="https://www.facebook.com/?locale=ko_KR"
            icon={Facebook}
            altText="페이스북"
          />
          <Sns
            url="https://twitter.com/?lang=ko"
            icon={Twitter}
            altText="트위터"
          />
          <Sns url="https://www.youtube.com" icon={Youtube} altText="유튜브" />
          <Sns
            url="https://www.instagram.com/"
            icon={Instagram}
            altText="인스타그램"
          />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
