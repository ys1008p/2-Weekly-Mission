import '../../../css/card.css';
import Cards from './Card';
import { NoneText } from '../../folderPage/FolderPageMain';

export default function CardsList({ cardData, ...other }) {
  return (
    <>
      {cardData.length !== 0 ? (
        <ul className="CardList">
          {cardData?.map((card) => (
            <li className="cardBox" key={card.id} folderid={card.folder_Id}>
              <Cards card={card} other={other} />
            </li>
          ))}
        </ul>
      ) : (
        <NoneText>저장된 링크가 없습니다</NoneText>
      )}
    </>
  );
}
