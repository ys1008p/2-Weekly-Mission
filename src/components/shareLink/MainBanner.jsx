import { LinkContext } from '../../contexts/LinkProvider';
import { useStoredData } from '../../utils/useStoredData';
import { ICON } from '../../store/common';

export const MainBanner = () => {
  const bannerData = useStoredData(LinkContext);
  const { name, owner } = bannerData;
  const { avatar } = ICON;

  return (
    <section className='folder-banner'>
      <h2 className='visually-hidden'>즐겨찾기 배너</h2>
      <div className='container'>
        <div className='folder-symbol'>
          <div className='folder-symbol-avatar'>
            <img
              className='folder-symbol-avatar-img'
              src={owner.profileImageSource || avatar.default.url}
              alt={avatar.default.alt}
              loading='lazy'
            />
          </div>
          <span>{owner.name}</span>
        </div>
        <h3 className='folder-banner-title'>{name}</h3>
      </div>
    </section>
  );
};
