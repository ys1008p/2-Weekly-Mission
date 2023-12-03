import { Helmet } from 'react-helmet';
import { MainBanner } from '../components/shareLink/MainBanner';
import { MainContent } from '../components/shareLink/MainContent';

const ShareLink = () => {
  return (
    <div>
      <Helmet>
        <title>즐겨찾기 | Linkbrary</title>
      </Helmet>

      <MainBanner />
      <MainContent />
    </div>
  );
};

export default ShareLink;
