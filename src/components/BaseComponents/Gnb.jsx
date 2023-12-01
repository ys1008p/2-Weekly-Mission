import { useEffect, useState } from "react";
import { getProfiles } from "../../services/api";
import logo from "../../assets/linkbrary-logo.png";
import "./Gnb.css";

function Gnb() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getProfiles();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  return (
    <nav>
      <div className="nav">
        <a href="/">
          <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {userData.data ? (
          <div className="gnb">
            {userData.data?.map((info) => {
              return (
                <>
                  <img
                    className="gnb-img"
                    src={info.image_source}
                    alt="프로필 사진"
                  />
                  <span className="email">{info.email}</span>
                </>
              );
            })}
          </div>
        ) : (
          <div>
            <button className="login button">로그인</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Gnb;
