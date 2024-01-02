import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { shareKakaoLink } from '../../utils/shareKakaoLink';
import { ICON } from '../../store/common';

const {
  shared: { kakao, facebook, linkcopy },
} = ICON;

export function ShareLink({ currentFolderId }) {
  const userId = 1;
  const currentURL = window.location.href;
  const shareURL = `${currentURL}/shared?user=${userId}&folder=${currentFolderId}`;

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (e) {
      console.error('[LINK COPY ERROR]', e);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js';

    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const shareFacebookLink = () => {
    window.open(`http://www.facebook.com/sharer.php?u=${encodeURIComponent(shareURL)}`);
  };

  return (
    <ul className='share-list'>
      <li className='share-list-item'>
        <div className='share-list-item-icon'>
          <img
            src={kakao.url}
            alt={kakao.alt}
            onClick={() => shareKakaoLink(shareURL, kakao.url)}
          />
        </div>
        <p>카카오톡</p>
      </li>
      <li className='share-list-item' onClick={shareFacebookLink}>
        <div className='share-list-item-icon'>
          <img src={facebook.url} alt={facebook.alt} />
        </div>
        <p>페이스북</p>
      </li>
      <li className='share-list-item' onClick={() => handleCopyClipBoard(shareURL)}>
        <div className='share-list-item-icon'>
          <img src={linkcopy.url} alt={linkcopy.alt} />
        </div>
        <p>링크복사</p>
      </li>
    </ul>
  );
}

ShareLink.propTypes = {
  currentFolderId: PropTypes.number,
};
