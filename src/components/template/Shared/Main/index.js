import React from "react"
import * as S from './style'
import SearchBar from "../../../atoms/SearchBar";
import Card from "../../../atoms/Card";

const SharedPageMain = () => {

  return (
    <main>
      <S.MainLayout>
        <S.MainContainer>
          <SearchBar></SearchBar>
          <S.CardListContainer>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </S.CardListContainer>
        </S.MainContainer>
      </S.MainLayout>
    </main>
  )
}

export default SharedPageMain;