import Banner from '@/components/banner/Banner';
import CardContainer from '@/components/card/CardContainer';
import SearchBar from '@/components/input/SearchBar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import '@/styles/Shared.css';

const Shared = () => (
  <>
    <Header />
    <main>
      <Banner />
      <div className="wrapper">
        <section className="container">
          <SearchBar placeholder="링크를 검색해 보세요." />
          <CardContainer />
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Shared;
