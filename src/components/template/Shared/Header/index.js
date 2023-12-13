import React, { useContext } from "react"
import * as S from './style'
import Gnb from "../../../molecules/Gnb";
import SharedFolderTitle from "../../../molecules/SharedFolderTitle";
import { DataContext } from "../../../../pages/SharedPage";
const SharedPageHeader = () => {
  const {folderOwnerData: {name,owner,profile}} = useContext(DataContext);
  console.log(`헤드컴포넌트렌더링됨`)
  return (
    <S.Header>
      <Gnb></Gnb>
      <S.heroHeader>
        <SharedFolderTitle profileImg={profile} ownerName={owner} folderTitle={name}></SharedFolderTitle>
      </S.heroHeader>
    </S.Header>
  )
}

export default SharedPageHeader;