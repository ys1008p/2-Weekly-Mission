import { LayoutStatusProvider } from '@/contexts/LayoutContext';
import style from './Layout.module.css';

import Footer from './Footer';
import Header from './Header';

function CommonPageLayout({ headerChildren, children }) {
  return (
    <LayoutStatusProvider>
      <Header>{headerChildren}</Header>
      <main className={style.main}>{children}</main>
      <Footer />
    </LayoutStatusProvider>
  );
}

export default CommonPageLayout;
