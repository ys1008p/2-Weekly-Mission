import FolderBanner from '@/components/banner/FolderBanner';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const Folder = () => {
  return (
    <>
      <Header sticky={false} />
      <main>
        <FolderBanner />
      </main>
      <Footer />
    </>
  );
};

export default Folder;
