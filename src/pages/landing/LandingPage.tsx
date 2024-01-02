import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <header className='bgc-blue'>
        <nav className='bgc-blue gnb'>
          <div className='wrap gnb__container'>
            <Link
              className='gnb__logo--anchor'
              to='/'
              aria-label='메인 페이지로 이동'
              tabIndex={1}>
              <img
                className='gnb__logo--img'
                src='/images/icons/logo.svg'
                alt='링크브러리 로고'
              />
            </Link>
            <a className='cta gnb__signin' href='/pages/auth/signin/index.html'>
              로그인
            </a>
          </div>
        </nav>
        <section className='wrap hero' aria-label='링크브러리 배너'>
          <h1 className='hero__heading'>
            <em className='background-clip-text hero__heading--gradient'>
              세상의 모든 정보
            </em>
            를<br />
            쉽게 저장하고 관리해 보세요
          </h1>
          <a className='cta hero__signup' href='/pages/auth/signup/index.html'>
            링크 추가하기
          </a>
          <div className='hero__img'>
            <img
              className='hero__img--img'
              src='/images/landing/main-capture.webp'
              alt='링크브러리 메인화면 캡쳐'
            />
          </div>
        </section>
      </header>
      <main className='main-margin'>
        <section
          className='contents-section'
          aria-label='링크브러리 기능 소개 1'>
          <div className='wrap contents'>
            <h2 className='contents__info--heading'>
              <em className='background-clip-text content1-gradient'>
                {' '}
                원하는 링크
              </em>
              를 저장하세요
            </h2>
            <p className='contents__info--desc'>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </p>
            <div className='content__img'>
              <img
                className='content__img--img'
                src='/images/landing/cards.webp'
                alt='링크 저장 기능 이미지'
              />
            </div>
          </div>
        </section>
        <section
          className='contents-section'
          aria-label='링크브러리 기능 소개 2'>
          <div className='wrap contents'>
            <h2 className='contents__info--heading'>
              링크를 폴더로
              <em className='background-clip-text content2-gradient'>관리</em>
              하세요
            </h2>
            <p className='contents__info--desc'>
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
            </p>
            <div className='content__img'>
              <img
                className='content__img--img'
                src='/images/landing/folder-name-change-popup.webp'
                alt='폴더명 변경 팝업'
              />
            </div>
          </div>
        </section>
        <section
          className='contents-section'
          aria-label='링크브러리 기능 소개 3'>
          <div className='wrap contents'>
            <h2 className='contents__info--heading'>
              저장한 링크를
              <em className='background-clip-text content3-gradient'>공유</em>해
              보세요.
            </h2>
            <p className='contents__info--desc'>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </p>
            <div className='content__img'>
              <img
                className='content__img--img'
                src='/images/landing/folder-share-popup.webp'
                alt='폴더 공유 팝업'
              />
            </div>
          </div>
        </section>
        <section
          className='contents-section'
          aria-label='링크브러리 기능 소개 4'>
          <div className='wrap contents'>
            <h2 className='contents__info--heading'>
              저장한 링크를
              <em className='background-clip-text content4-gradient'>검색</em>해
              보세요
            </h2>
            <p className='contents__info--desc'>
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
            <div className='content__img'>
              <img
                className='content__img--img'
                src='/images/landing/search-capture.webp'
                alt='링크 검색 결과 확대'
              />
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className='wrap footer__container'>
          <div className='footer__copy-right'>©codeit - 2023</div>
          <div className='footer__pages'>
            <a className='footer__pages--link' href='pages/privacy/'>
              Privacy Policy
            </a>
            <a className='footer__pages--link' href='pages/faq/'>
              FAQ
            </a>
          </div>
          <div className='footer__sns-links'>
            <a
              className='footer__sns-links--anchor'
              href='https://www.facebook.com/'>
              <img
                className='footer__sns-links--icon'
                src='/images/icons/facebook-fill.svg'
                alt='페이스북 아이콘'
              />
            </a>
            <a
              className='footer__sns-links--anchor'
              href='https://twitter.com/'>
              <img
                className='footer__sns-links--icon'
                src='/images/icons/twitter-fill.svg'
                alt='트위터 아이콘'
              />
            </a>
            <a
              className='footer__sns-links--anchor'
              href='https://www.youtube.com/'>
              <img
                className='footer__sns-links--icon'
                src='/images/icons/youtube-fill.svg'
                alt='유튜브 아이콘'
              />
            </a>
            <a
              className='footer__sns-links--anchor'
              href='https://www.instagram.com/'>
              <img
                className='footer__sns-links--icon'
                src='/images/icons/instagram-filled.svg'
                alt='인스타그램 아이콘'
              />
            </a>
          </div>
        </div>
      </footer>
      ;
    </div>
  );
}

export default LandingPage;
