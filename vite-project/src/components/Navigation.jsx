import logo from "../../../images/landing/logo.svg";
import "./Navigation.css";
import { useEffect, useState } from "react";
import useAsync from "../hooks/useAsync";
import { getApiInfo } from "../api";

const apiSettings = {
  endpoints: {
    profile: "/api/sample/user",
    folder: "/api/sample/folder",
  },
  errorMessages: {
    profile: "유저 정보를 불러오는데 실패했습니다.",
    folder: "폴더를 불러오는데 실패했습니다.",
  },
};

function Navigation() {
  const [profile, setProfile] = useState({});
  const [isProfileLoading, ProfileError, getProfileAsync] =
    useAsync(getApiInfo);

  const loadProfile = async () => {
    const result = await getProfileAsync(
      apiSettings.endpoints.profile,
      apiSettings.errorMessages.profile
    );
    if (!result) return;

    const { profileImageSource, email } = result;
    setProfile({ profileImageSource, email });
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <nav>
      <div className="gnb">
        <a href="/">
          <img className="cta logo" src={logo} alt="로고" />
        </a>
        {profile ? (
          <div className="cta profile">
            <img
              className="profile-logo"
              src={profile.profileImageSource}
              alt="프로필 로고"
            />
            <span className="profile-email">{profile.email}</span>
          </div>
        ) : (
          <a href="../../../signin/index.html">
            <button className="cta login" type="button">
              로그인
            </button>
          </a>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
