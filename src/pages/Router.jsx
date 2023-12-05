import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shared from './Shared';
import Folder from './Folder';

const router = createBrowserRouter([
  {
    path: '/shared',
    element: <Shared />,
  },
  {
    path: '/folder',
    element: <Folder />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
