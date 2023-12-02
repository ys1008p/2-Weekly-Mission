import React from "react"
import * as S from './style'

const src = "./images/logo.svg"
const folderOwner = "@코드잇"
const folderTitle = "즐겨찾기"

const SharedHeader = () => {


  return (
		<S.Div>
			<S.Img src={src} alt="폴더 소유자 프로필 이미지"></S.Img>
			<S.P>{folderOwner}</S.P>
			<S.h1>{folderTitle}</S.h1>
		</S.Div>
  )
}

export default SharedHeader;