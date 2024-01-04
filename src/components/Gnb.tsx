import { useLocation } from "react-router-dom";
import { CtaShort } from "styles/cta";
import { Gnb } from "styles/gnb";
import account from "assets/images/account.png";
import logo from "assets/images/logo.svg";

interface GnbProps {
  auth: any;
  isLogin: boolean;
  onClick: () => void;
}

const GNB: React.FC<GnbProps> = ({ auth, isLogin, onClick }) => {
  const location = useLocation();
  return (
    <Gnb.Wrapper $location={location.pathname}>
      <Gnb.Container>
        <Gnb.Logo src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        {isLogin ? (
          <Gnb.Account>
            <Gnb.AccountIcon src={auth?.image_source || account} alt="account" />
            <Gnb.Email>{auth?.email || ""}</Gnb.Email>
          </Gnb.Account>
        ) : (
          <CtaShort onClick={onClick}>
            <span>로그인</span>
          </CtaShort>
        )}
      </Gnb.Container>
    </Gnb.Wrapper>
  );
};

export default GNB;
