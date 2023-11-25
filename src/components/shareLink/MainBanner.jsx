import { useStoredLink } from '../../contexts/linkProvider';
import { importImg } from '../../store/common';
export const MainBanner = () => {
  const bannerData = useStoredLink();
  const { name, owner } = bannerData;
  const { share } = importImg;

  return (
    <section className='folder-banner'>
      <h2 className='visually-hidden'>즐겨찾기 배너</h2>
      <div className='container'>
        <div className='codeit-symbol'>
          <img
            className='codeit-symbol-avatar'
            src={owner?.profileImageSource || share.emptyAvatar}
            alt='코드잇 심볼'
          />
          <span>{owner?.name}</span>
        </div>
        <h3 className='folder-banner-title'>{name}</h3>
      </div>
    </section>
  );
};
