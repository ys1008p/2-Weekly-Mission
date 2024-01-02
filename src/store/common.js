// [images]PNG
import section1 from '../assets/images/img-landing-01.png';
import section2 from '../assets/images/img-landing-02.png';
import section3 from '../assets/images/img-landing-03.png';
import section4 from '../assets/images/img-landing-04.png';
import emptyThumbnail from '../assets/images/empty-card-img.png';
// [Icon]SVG
import logo from '../assets/images/logo.svg';
import socialKakao from '../assets/images/icon/social-kakao.svg';
import socialGoogle from '../assets/images/icon/social-google.svg';
import eyeShowIcon from '../assets/images/icon/eye-on.svg';
import eyeHideIcon from '../assets/images/icon/eye-off.svg';
import emptyAvatar from '../assets/images/icon/codeit.svg';
import favoriteDefault from '../assets/images/icon/star-default.svg';
import favoriteActive from '../assets/images/icon/star-active.svg';
import liked from '../assets/images/icon/link.svg';
import kakao from '../assets/images/icon/kakao.svg';
import facebook from '../assets/images/icon/facebook.svg';
import linkcopy from '../assets/images/icon/link.svg';

export const FLOATING_BUTTON_POSITION = 101;

export const ROUTER_PATH = {
  SHARED_PATH: '/shared',
  LANDING_PATH: '/',
  SIGNIN_PATH: '/signin',
  SIGNUP_PATH: '/signup',
  FOLDER_PATH: '/folder',
};

export const SELECT_MENU = [
  {
    id: 1,
    name: '삭제하기',
    type: 'remove',
  },
  {
    id: 2,
    name: '폴더에 추가',
    type: 'add',
  },
];

export const FOOTER_SOCIAL_LIST = [
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

export const SOCIAL_LOGIN = [
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

export const IMAGE_URL = {
  home: {
    section1: {
      url: section1,
      alt: '링크 저장 이미지',
    },
    section2: {
      url: section2,
      alt: '폴더 관리 이미지',
    },
    section3: {
      url: section3,
      alt: '링크 공유 이미지',
    },
    section4: {
      url: section4,
      alt: '링크 검색 이미지',
    },
  },
  empty: {
    url: emptyThumbnail,
    alt: '기본 썸네일 이미지',
  },
};

export const ICON = {
  logo: {
    url: logo,
    alt: 'linkbrary 로고 이미지',
  },
  eye: {
    default: {
      url: eyeHideIcon,
      alt: '비밀번호 숨기기',
    },
    active: {
      url: eyeShowIcon,
      alt: '비밀번호 보기',
    },
  },
  star: {
    default: {
      url: favoriteDefault,
      alt: '즐겨찾기 아이콘-off',
    },
    active: {
      url: favoriteActive,
      alt: '즐겨찾기 아이콘-on',
    },
  },
  avatar: {
    default: {
      url: emptyAvatar,
      alt: '기본 이미지',
    },
  },
  liked: {
    url: liked,
    alt: '링크 추가하기 아이콘',
  },
  shared: {
    kakao: {
      url: kakao,
      alt: '카카오톡 심볼 아이콘',
    },
    facebook: {
      url: facebook,
      alt: '페이스북 심볼 아이콘',
    },
    linkcopy: {
      url: linkcopy,
      alt: '링크 아이콘',
    },
  },
};
