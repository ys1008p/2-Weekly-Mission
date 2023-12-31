import kebab from '../../../img/kebab.svg';
import noneImg from '../../../img/!img.svg';
import { timeAgo } from '../../../util/time.js';
import PopOver from './PopOver.jsx';
import Star from './Star.jsx';
import '../../../css/card.css';
import DeleteLinkModal from '../Modals/DeleteLinkModal.jsx';
import AddFolderModal from '../Modals/AddFolderModal.jsx';
import AddLinkModal from '../Modals/AddLinkModal.jsx';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export default function Card({ card, other }) {
  const {
    created_at,
    createdAt,
    description,
    image_source,
    imageSource,
    title,
    url,
    id,
  } = card;

  const {
    buttons,
    isModal,
    handleModal,
    handleSelet,
    handleKebab,
    isSelected,
    isKebab,
  } = other;
  return (
    <>
      <div className="card">
        <a href={url} className="cardImgBox">
          <img
            className="cardImg"
            src={imageSource || image_source || noneImg}
            alt={title}
          />
        </a>
        <Star onClick={() => handleSelet(id)} id={id} isSelected={isSelected} />
        <img
          className="kebab"
          src={kebab}
          alt="기능 버튼"
          onClick={() => handleKebab(id)}
        />
        {isKebab === id && <PopOver id={id} handleModal={other.handleModal} />}

        <a href={url} className="cardText">
          <p className="timeAgo">{timeAgo(createdAt || created_at)}</p>
          <h6 className="cardDescription">{description}</h6>
          <p className="makeDate">{formatDate(createdAt || created_at)}</p>
        </a>
      </div>
      {isModal === `${id}delete` && (
        <DeleteLinkModal url={url} handleModal={handleModal} />
      )}
      {isModal === `${id}add` && (
        <AddLinkModal buttons={buttons} handleModal={handleModal} url={url} />
      )}
    </>
  );
}
