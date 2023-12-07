import * as S from "./styled";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
