import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "App";
import Folder from "pages/Folder";
import Shared from "pages/Shared";

const authLoader = () => {
  //로그인 여부 확인해서 로그인 하지 않으면 페이지 전환
  //추후 구현
  return "";
};

const route = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/folder" /> },
      { path: "shared", element: <Shared /> },
      { path: "folder", element: <Folder /> },
    ],
    loader: authLoader,
  },
];

export const router = createBrowserRouter(route);
