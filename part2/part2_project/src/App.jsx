import { createBrowserRouter } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";

const App = createBrowserRouter([
  {
    path: "/",
    element: <SharedPage />,
    errorElement: <></>,
  },
  {
    path: "/folder",
    element: <FolderPage />,
    errorElement: <></>,
  },
]);

export default App;
