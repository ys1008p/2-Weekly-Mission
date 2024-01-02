import { Helmet } from 'react-helmet';
import { IMAGE_URL } from '../store/common';
import { ButtonLink } from '../components/common/Button';

const Home = () => {
  const {
    home: { section1, section2, section3, section4 },
  } = IMAGE_URL;

  return (
    <div>
      <Helmet>
        <title>Linkbrary</title>
      </Helmet>

      <div id='skip_nav'>
        <a href='#content'>본문 바로가기</a>
      </div>

      <main className='landing-page'>
        <section className='call-to-action'>
          <div className='container'>
            <h2 className='title'>
              <span className='br title-br'>
                <span className='title-gradient'>세상의 모든 정보</span>를
              </span>
              <span className='br'>쉽게 저장하고</span>
              <span className='br'>관리해 보세요</span>
            </h2>
            <ButtonLink
              path={'/signup'}
              text={'링크 추가하기'}
              className={'btn-default btn-signup'}
            />
          </div>
        </section>

        <section id='content' className='feature-save'>
          <div className='container'>
            <div className='sm-hidden'>
              <div className='feature-wrapper'>
                <div className='textbox'>
                  <h2 className='textbox-sub-title'>
                    <span>원하는 링크</span>를 저장하세요
                  </h2>
                  <p className='textbox-desc'>
                    나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
                    모든 것을 한 공간에 저장하세요.
                  </p>
                </div>
                <div className='imgbox'>
                  <img src={section1.url} alt={section1.alt} />
                </div>
              </div>
            </div>

            <div className='sm-only'>
              <div className='feature-wrapper'>
                <h2 className='textbox-sub-title'>
                  <span>원하는 링크</span>를 저장하세요
                </h2>
                <div className='imgbox'>
                  <img src={section1.url} alt={section1.alt} />
                </div>
                <p className='textbox-desc'>
                  나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
                  모든 것을 한 공간에 저장하세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='feature-manage'>
          <div className='container'>
            <div className='sm-hidden'>
              <div className='feature-wrapper'>
                <div className='textbox'>
                  <h2 className='textbox-sub-title'>
                    링크를 폴더로 <span>관리</span>하세요
                  </h2>
                  <p className='textbox-desc'>
                    나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
                  </p>
                </div>
                <div className='imgbox'>
                  <img src={section2.url} alt={section2.alt} />
                </div>
              </div>
            </div>

            <div className='sm-only'>
              <div className='feature-wrapper'>
                <h2 className='textbox-sub-title'>
                  링크를 폴더로 <span>관리</span>하세요
                </h2>
                <div className='imgbox'>
                  <img src={section2.url} alt={section2.alt} />
                </div>
                <p className='textbox-desc'>
                  나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='feature-share'>
          <div className='container'>
            <div className='sm-hidden'>
              <div className='feature-wrapper'>
                <div className='textbox'>
                  <h2 className='textbox-sub-title'>
                    저장한 링크를 <span>공유</span>해 보세요
                  </h2>
                  <p className='textbox-desc'>
                    여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
                    쉽고 빠르게 링크를 공유해 보세요.
                  </p>
                </div>
                <div className='imgbox'>
                  <img src={section3.url} alt={section3.alt} />
                </div>
              </div>
            </div>

            <div className='sm-only'>
              <div className='feature-wrapper'>
                <h2 className='textbox-sub-title'>
                  저장한 링크를 <span>공유</span>해 보세요
                </h2>
                <div className='imgbox'>
                  <img src={section3.url} alt={section3.alt} />
                </div>
                <p className='textbox-desc'>
                  여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고
                  빠르게 링크를 공유해 보세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='feature-search'>
          <div className='container'>
            <div className='sm-hidden'>
              <div className='feature-wrapper'>
                <div className='textbox'>
                  <h2 className='textbox-sub-title'>
                    저장한 링크를 <span>검색</span>해 보세요
                  </h2>
                  <p className='textbox-desc'>
                    중요한 정보들을 검색으로 쉽게 찾아보세요.
                  </p>
                </div>
                <div className='imgbox'>
                  <img src={section4.url} alt={section4.alt} />
                </div>
              </div>
            </div>

            <div className='sm-only'>
              <div className='feature-wrapper'>
                <h2 className='textbox-sub-title'>
                  저장한 링크를 <span>검색</span>해 보세요
                </h2>
                <div className='imgbox'>
                  <img src={section4.url} alt={section4.alt} />
                </div>
                <p className='textbox-desc'>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
