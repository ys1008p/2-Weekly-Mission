import { Helmet } from 'react-helmet';
import { MainBanner } from '../components/folder/MainBanner';
import { MainContent } from '../components/folder/MainContent';

const Folder = () => {
  return (
    <div>
      <Helmet>
        <title>링크 폴더 관리 | Linkbrary</title>
      </Helmet>

      <MainBanner />
      <MainContent />
    </div>
  );
};

export default Folder;
