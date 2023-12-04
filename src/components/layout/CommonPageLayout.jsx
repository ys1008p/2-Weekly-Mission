import style from './Layout.module.css';

import Footer from './Footer';
import Header from './Header';

function CommonPageLayout({ headerChildren, children }) {
  return (
    <>
      <Header>{headerChildren}</Header>
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
}

export default CommonPageLayout;
