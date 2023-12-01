import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Cards } from './components/shared/Cards/Cards';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="folder" element={<Cards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
