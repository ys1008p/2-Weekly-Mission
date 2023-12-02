import React from "react"
import * as S from './style'
import Gnb from "../../../molecules/Gnb";
import SharedFolderTitle from "../../../molecules/SharedFolderTitle";

const SharedPageHeader = () => {

  return (
    <S.Header>
      <Gnb></Gnb>
      <S.heroHeader>
        <SharedFolderTitle></SharedFolderTitle>
      </S.heroHeader>
    </S.Header>
  )
}

export default SharedPageHeader;