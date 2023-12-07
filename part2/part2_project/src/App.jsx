import { createBrowserRouter } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";

const App = createBrowserRouter([
  {
    path: "/folder",
    element: <FolderPage />,
  },
  {
    path: "/shared",
    element: <SharedPage />,
  },
]);

export default App;
