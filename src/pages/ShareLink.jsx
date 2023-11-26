import { Helmet } from 'react-helmet';
import { MainBanner } from '../components/shareLink/MainBanner';
import { Content } from '../components/shareLink/Content';

const ShareLink = () => {
  return (
    <div>
      <Helmet>
        <title>즐겨찾기 | Linkbrary</title>
      </Helmet>

      <MainBanner />
      <Content />
    </div>
  );
};

export default ShareLink;
