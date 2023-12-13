import React, { useContext } from "react"
import * as S from './style'
import SearchBar from "../../../atoms/SearchBar";
import Card from "../../../molecules/Card";
import { DataContext } from "../../../../pages/SharedPage";
const SharedPageMain = () => {
  const {folderLinksData} = useContext(DataContext);
  console.log(`메인컴포넌트렌더링됨`)
  return (
    <main>
      <S.MainLayout>
        <S.MainContainer>
          <SearchBar></SearchBar>
          <S.CardListContainer>
            {folderLinksData && folderLinksData.map(({id,imageSource,createdAt,description,url}) => (
                <Card 
                key={id}
                imgSrc={imageSource}
                createdAt={createdAt}
                description={description}
                url={url}/>
              ))}
          </S.CardListContainer>
        </S.MainContainer>
      </S.MainLayout>
    </main>
  )
}

export default SharedPageMain;