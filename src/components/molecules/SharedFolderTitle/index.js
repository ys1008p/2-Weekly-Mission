import React from "react"
import * as S from './style'


const SharedFolderTitle = ({profileImg, ownerName, folderTitle}) => {


  return (
		<S.Div>
			<S.Img src={profileImg} alt="폴더 소유자 프로필 이미지"></S.Img>
			<S.P>{ownerName}</S.P>
			<S.h1>{folderTitle}</S.h1>
		</S.Div>
  )
}

export default SharedFolderTitle;