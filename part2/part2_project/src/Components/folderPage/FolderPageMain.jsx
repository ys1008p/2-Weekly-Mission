import styled from 'styled-components';
import SearchBox from '../sharing/SearchBox';
import CardsList from '../sharing/Card/CardsList';
import SortButton from './SortButton';
import '../../css/folderButtons.css';

export const NoneText = styled.p`
  text-align: center;

  font-size: 1rem;
  font-weight: 400;
`;

const SearchText = styled.h1`
  color: var(--Linkbrary-gray100);

  font-size: 2rem;
  font-weight: 600;
  line-height: normal;

  > span {
    color: var(--Linkbrary-gray60, #9fa6b2);
  }
`;

export default function FolderPageMain({
  search,
  setSearch,
  handleSearch,
  isModal,
  handleModal,
  buttons,
  cardData,
  handleShowAll,
  yourPick,
  littleTitle,
  handleSelet,
  handleKebab,
  isSelected,
  isKebab,
}) {
  return (
    <main>
      {cardData ? (
        <>
          <SearchBox
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
          {search && (
            <SearchText>
              {search}
              <span>으로 검색한 결과입니다.</span>
            </SearchText>
          )}
          <SortButton
            handleModal={handleModal}
            isModal={isModal}
            buttons={buttons}
            handleShowAll={handleShowAll}
            yourPick={yourPick}
            littleTitle={littleTitle}
          />
          <CardsList
            handleSearch={handleSearch}
            handleModal={handleModal}
            isModal={isModal}
            buttons={buttons}
            handleShowAll={handleShowAll}
            cardData={cardData}
            handleSelet={handleSelet}
            isSelected={isSelected}
            handleKebab={handleKebab}
            isKebab={isKebab}
          />
        </>
      ) : (
        <>
          <SearchBox />
          <NoneText>저장된 링크가 없습니다</NoneText>
        </>
      )}
    </main>
  );
}
