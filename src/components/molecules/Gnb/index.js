import React from "react"
import * as S from './style'
import Logo from "../../atoms/Logo"
import Cta from "../../atoms/Cta"

const Gnb = () => {


  return (
		<S.Nav>
			<Logo></Logo>
			<Cta></Cta>
		</S.Nav>
  )
}

export default Gnb;