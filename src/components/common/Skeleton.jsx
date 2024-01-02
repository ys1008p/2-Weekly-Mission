import '../../styles/main.scss';

// Loading page => lazy
const SkeletonCardItem = () => {
  return (
    <div className='card-item s-card-item'>
      <div className='card-item-content'>
        <div className='card-item-img s-img-box'></div>
        <div className='card-item-textBox'>
          <ul className='skeleton-desc'>
            <li className='skeleton-desc-item'></li>
            <li className='skeleton-desc-item'></li>
            <li className='skeleton-desc-item'></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className='skeleton'>
      <header className='skeleton-gnb'>
        <div className='gnb-container skeleton-container'>
          <div className='skeleton-logo'></div>
          <div className='skeleton-profile'>
            <div className='skeleton-profile-avatar'></div>
            <div className='skeleton-profile-username'></div>
          </div>
        </div>
      </header>

      <div className='skeleton-banner'>
        <div className='container'>
          <div className='skeleton-banner-box'>
            <div className='skeleton-banner-avatar'></div>
            <span className='skeleton-banner-name'></span>
            <div className='skeleton-banner-title'></div>
          </div>
        </div>
      </div>

      <main>
        <div className='container share-wrapper'>
          <div className='skeleton-searchbar'></div>
          <div className='card-item-wrapper'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <SkeletonCardItem key={index} />
            ))}
          </div>
        </div>
        <div></div>
      </main>

      <footer>
        <div className='footer-container skeleton-footer'>
          <div className='skeleton-footer-item'></div>
          <div className='skeleton-footer-item'></div>
          <div className='skeleton-footer-item'></div>
        </div>
      </footer>
    </div>
  );
};

export default Skeleton;
