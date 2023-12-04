import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shared from "./page/shared/Shared";
import Folder from "./page/folder/Folder";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate  replace to="/folder" />} />
        <Route path="/shared" element={<Shared />}></Route>
        <Route path="/folder" element={<Folder />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;