// import images
import socialKakao from '../assets/images/icon/social-kakao.svg';
import socialGoogle from '../assets/images/icon/social-google.svg';
import logo from '../assets/images/logo.svg';
import eyeShowIcon from '../assets/images/icon/eye-on.svg';
import eyeHideIcon from '../assets/images/icon/eye-off.svg';
import section1 from '../assets/images/img-landing-01.png';
import section2 from '../assets/images/img-landing-02.png';
import section3 from '../assets/images/img-landing-03.png';
import section4 from '../assets/images/img-landing-04.png';
import emptyAvatar from '../assets/images/icon/codeit.svg';
import emptyThumbnail from '../assets/images/empty-card-img.png';

// [Router]페이지 경로
export const ROUTER_PATH = {
  SHARED_PATH: '/',
  LANDING_PATH: '/landing',
  SIGNIN_PATH: '/signin',
  SIGNUP_PATH: '/signup',
  FOLDER_PATH: '/folder',
};

// [footer-right] social-icons
export const footerSocialList = [
  {
    id: 1,
    url: 'https://www.facebook.com/?locale=ko_KR',
    label: 'facebook 링크 버튼',
    icon: 'ic-facebook-1',
  },
  {
    id: 2,
    url: 'https://twitter.com/?lang=ko',
    label: 'twitter 링크 버튼',
    icon: 'ic-twitter',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/',
    label: 'youtube 링크 버튼',
    icon: 'ic-youtube',
  },
  {
    id: 4,
    url: 'https://www.instagram.com/',
    label: 'instagram 링크 버튼',
    icon: 'ic-instagram',
  },
];

// [signin/signup] 소셜 로그인, 가입 아이콘
export const SocialLogin = [
  {
    id: 1,
    url: 'https://www.google.com/',
    src: socialGoogle,
    alt: '소셜 로그인-구글',
  },
  {
    id: 2,
    url: 'https://www.kakaocorp.com/page/',
    src: socialKakao,
    alt: '소셜 로그인-카카오',
  },
];

// [import]페이지별 이미지
export const importImg = {
  logo,
  auth: {
    eyeShowIcon,
    eyeHideIcon,
  },
  home: {
    section1,
    section2,
    section3,
    section4,
  },
  share: {
    // 사용자가 이미지를 지정하지 않았을 때 default 이미지 고려(변경 가능)
    emptyAvatar,
    emptyThumbnail,
  },
};
