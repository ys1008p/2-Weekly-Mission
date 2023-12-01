import { Cta } from "../../molecules/Cta/index";
import { Profile } from "../../molecules/Profile/index";
import { ROUTE } from "../../util/constant";
import { LOGO_IMAGE, TEXT } from "./constant";
import "./Header.css";

export const Header = ({ profile }) => {
  return (
    <nav className="Header">
      <div className="Header-items">
        <a href={ROUTE.랜딩}>
          <img
            className="Header-logo"
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta isSmall>
              <span className="Header-signin">{TEXT.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
