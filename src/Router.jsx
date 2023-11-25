import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skeleton from './components/common/Skeleton';
import Layout from './components/layout/Layout';
import ErrorBoundary from './pages/ErrorBoundary';
import { ROUTER_PATH } from './store/common';
import './styles/main.scss';

const { SHARED_PATH, LANDING_PATH, SIGNIN_PATH, SIGNUP_PATH, FOLDER_PATH } = ROUTER_PATH;

const ShareLink = lazy(() => import('./pages/ShareLink'));
const Home = lazy(() => import('./pages/Home'));
const Signin = lazy(() => import('./pages/Signin'));
const Signup = lazy(() => import('./pages/Signup'));
const Folder = lazy(() => import('./pages/Folder'));

const MyRouter = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Skeleton />}>
          <Routes>
            <Route path={SHARED_PATH} element={<Layout content={<ShareLink />} />} />
            <Route path={LANDING_PATH} element={<Layout content={<Home />} />} />
            <Route path={SIGNIN_PATH} element={<Signin />} />
            <Route path={SIGNUP_PATH} element={<Signup />} />
            <Route path={FOLDER_PATH} element={<Layout content={<Folder />} />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default MyRouter;
