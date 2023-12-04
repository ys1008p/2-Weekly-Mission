import styles from './Folder.module.css';

import FolderBanner from '@/components/banner/FolderBanner';
import SearchBar from '@/components/input/SearchBar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const Folder = () => {
  return (
    <>
      <Header sticky={false} />
      <main>
        <FolderBanner />
        <div className={styles.wrapper}>
          <section className={styles.container}>
            <SearchBar placeholder="링크를 검색해 보세요." />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Folder;
