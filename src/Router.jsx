import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './pages/ErrorBoundary';
import Spinner from './components/common/LoadingSpinner';
import Layout from './components/layout/Layout';
import { ROUTER_PATH } from './store/common';
import './styles/main.scss';

const { SHARED_PATH, LANDING_PATH, SIGNIN_PATH, SIGNUP_PATH, FOLDER_PATH } = ROUTER_PATH;

const Home = lazy(() => import('./pages/Home'));
const Signin = lazy(() => import('./pages/Signin'));
const Signup = lazy(() => import('./pages/Signup'));
const ShareLink = lazy(() => import('./pages/ShareLink'));
const Folder = lazy(() => import('./pages/Folder'));
const NotFound = lazy(() => import('./pages/NotFound'));

const MyRouter = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={SHARED_PATH} element={<Layout content={<ShareLink />} />} />
            <Route path={LANDING_PATH} element={<Layout content={<Home />} />} />
            <Route path={SIGNIN_PATH} element={<Signin />} />
            <Route path={SIGNUP_PATH} element={<Signup />} />
            <Route path={FOLDER_PATH} element={<Layout content={<Folder />} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default MyRouter;
