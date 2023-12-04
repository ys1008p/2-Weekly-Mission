import React, { useEffect, useState } from "react"
import * as S from './style'
import Logo from "../../atoms/Logo"
import Cta from "../../atoms/Cta"
import UserBadge from "../../atoms/UserBadge"
import useFetch from "../../../hooks/useFetch"

const Gnb = () => {
	const {loading, error, data} = useFetch("https://bootcamp-api.codeit.kr/api/sample/user");
	const [userInfo, setUserInfo] = useState({});
	useEffect(() => {
    if (!loading && !error && data) {
      setUserInfo({
        email: data.email,
				profile: data.profileImageSource,
      });
      console.log("loading변경 감지로 state업데이트됨")
    }
  }, [loading]);
  return (
		<S.Nav>
			<Logo parent="gnb"></Logo>
			{userInfo ?
				<UserBadge profileImg={userInfo.profile} email={userInfo.email}></UserBadge> : <Cta parent="gnb"></Cta>}
		</S.Nav>
  )
}

export default Gnb;