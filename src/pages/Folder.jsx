// 7 - 8주차 진행
import { Helmet } from 'react-helmet';
import { MainBanner } from '../components/linkFolder/MainBanner';
import { MainContent } from '../components/linkFolder/MainContent';

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
