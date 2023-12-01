import Stars from '../Stars/Stars';
import logoImg from '../Gnb/logo.svg';
import kebapImg from './images/kebab.png';
import { timeAgo, getYYYYMMYY, getShortDescription } from '../../../utils/formatting';

function EmptyCard() {
  return (
    <div className="EmptyCard">
      <img className="logoInCard" src={logoImg}></img>
    </div>
  );
}

export default function CardItem({ link }) {
  // null값을 가진 link가 들어오는 경우 -> nullish 사용
  // const link = {
  //   created_at: "2023-06-30T08:07:41.588529+00:00"
  //   description: null
  //   folder_id: null
  //   id: 192
  //   image_source: null
  //   title: null
  //   updated_at: null
  //   url: "https://bootcamp-api.codeit.kr/docs"
  // }

  return (
    <a className="contentBox" href={link.url ?? `''`} target="_blank">
      <div className="imgContainer">
        {link.image_source ?? `''` ? (
          <img className="contentImage" src={link.image_source ?? `''`}></img>
        ) : (
          <EmptyCard className="hoveredImg" />
        )}
        <Stars />
      </div>
      <section className="contentText">
        <div className="contentNav">
          <div className="timeCreated">{timeAgo(link.created_at ?? `''`)}</div>
          <img className="moreInfoCebap" src={kebapImg}></img>
        </div>
        <div className="description">{getShortDescription(link.description ?? `''`)}</div>
        <div className="dateCreated">{getYYYYMMYY(link.created_at ?? `''`)}</div>
      </section>
    </a>
  );
}
