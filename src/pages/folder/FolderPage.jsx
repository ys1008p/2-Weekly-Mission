import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { UserProvider } from '@/contexts/UserContext';

function FolderPage() {
  return (
    <UserProvider>
      <Header></Header>
      <main className='main'></main>
      <Footer />
    </UserProvider>
  );
}

export default FolderPage;
