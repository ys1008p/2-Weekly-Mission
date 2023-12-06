import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LandingRoot from "./pages/LandingRoot";
import FolderRoot from "./pages/folderRoot";

const router = createBrowserRouter([
  {
    path: "/landing",
    element: <LandingRoot />,
    errorElement: <p>Not Found Error</p>,
  },
  {
    path: "/folder",
    element: <FolderRoot />,
    errorElement: <></>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
