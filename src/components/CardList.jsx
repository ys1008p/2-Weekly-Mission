import styled from 'styled-components';
import noImg from '../assets/no-img.svg';
import star from '../assets/ico-star.png';
import kebab from '../assets/btn-kebab.png';
import { Link } from 'react-router-dom';
import PopOver from './PopOver';
import { useState } from 'react';

const Card = styled.img`
  display: block;
  width: 100%;
  height: 20rem;
  object-fit: cover;
`;

const CardContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 0;
  justify-content: space-between;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    gap: 2rem 0;
  }
`;

const Cards = styled.li`
  position: relative;
  width: calc(33.3% - 2rem);
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
  border-radius: 15px;

  @media screen and (max-width: 1124px) {
    width: calc(50% - 2.4rem);
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    width: 100%;
  }

  a {
    display: block;
    overflow: hidden;
    border: 3px solid transparent;
    border-radius: 15px;

    &.active {
      border: 3px solid var(--primary);

      ${Card} {
        transform: scale(1.3);
        transition: all 0.5s;
      }

      div {
        background-color: var(--bg);
      }
    }
  }
`;

const ImgBox = styled.div`
  overflow: hidden;
  position: relative;
  height: 20rem;
`;

const Star = styled.img`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  width: 3.4rem;
  height: 3.4rem;
`;

const Text = styled.div`
  overflow: hidden;
  min-height: 11.5rem;
  padding: 1.5rem 2rem;
`;

const Kebab = styled.span`
  display: block;
  float: right;
  width: 2.1rem;
  height: 1.7rem;
  background: url('${kebab}') no-repeat;
`;

const TimeStamp = styled.p`
  float: left;
  font-size: 1.3rem;
  line-height: 1.5rem;
  color: var(--gray-666);
`;

const Desc = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  min-height: 3.8rem;
  margin: 2.1rem 0 1rem 0;
  font-size: 1.6rem;
  color: var(--black-000);
  clear: both;
`;

const CreatedDate = styled.p`
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: var(--black-333);
`;

const NoLink = styled.p`
  text-align: center;
  font-size: 1.6rem;
`;

function getDateText({ createdAt }) {
  const idx = createdAt.indexOf('T');
  const text = createdAt.slice(0, idx);
  return text;
}

function getDateInfo({ createdAt }) {
  const createdDate = new Date(createdAt);
  const today = new Date();
  const result = today - createdDate;

  const second = result / 1000;
  const minites = second / 60;
  const hour = minites / 60;
  const month = hour / 24;
  const year = month / 30;

  if (minites < 2) return '1 minute ago';
  if (minites < 60) return `${Math.floor(minites)} minutes ago`;
  if (hour < 24) return `${Math.floor(hour)} hour ago`;
  if (month < 30) return `${Math.floor(month)} days ago`;
  if (year < 12) return `${Math.floor(year)} months ago`;
  if (year >= 12) {
    const yearDate = Math.floor(year / 12);
    return yearDate === 1 ? '1 years ago' : `${year} years ago`;
  }
}

function CardList({ cardList, data, menu, menuActive }) {
  const [isOpen, setIsOpen] = useState(null);

  const handleClickKebab = (e, id) => {
    e.preventDefault();
    setIsOpen((prevOpen) => prevOpen !== id && id);
  };

  if (cardList.length === 0) return <NoLink>저장된 링크가 없습니다</NoLink>;

  const handleMouseOverOut = (e, isOver) => {
    e.currentTarget.classList[isOver ? 'add' : 'remove']('active');
  };

  const cards = cardList.map((card) => (
    <Cards key={card.id}>
      {data ? (
        <>
          <Link
            to={card.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={(e) => handleMouseOverOut(e, true)}
            onMouseOut={(e) => handleMouseOverOut(e, false)}
          >
            <ImgBox>
              <Card
                src={card.image_source ? card.image_source : noImg}
                alt="카드 이미지"
              />
              <Star src={star} alt="별 이미지" />
            </ImgBox>
            <Text>
              <TimeStamp>
                {getDateInfo({ createdAt: card.created_at })}
              </TimeStamp>
              <Kebab onClick={(e) => handleClickKebab(e, card.id)}></Kebab>
              <Desc>{card.description}</Desc>
              <CreatedDate>
                {getDateText({ createdAt: card.created_at })}
              </CreatedDate>
            </Text>
          </Link>
          <PopOver $isOpen={card.id === isOpen} url={card.url} menu={menu} menuActive={menuActive}/>
        </>
      ) : (
        <Link to={card.url} target="_blank" rel="noopener noreferrer">
          <ImgBox>
            <Card
              src={card.imageSource ? card.imageSource : noImg}
              alt="카드 이미지"
            />
          </ImgBox>
          <Text>
            <TimeStamp>{getDateInfo({ createdAt: card.createdAt })}</TimeStamp>
            <Desc>{card.description}</Desc>
            <CreatedDate>
              {getDateText({ createdAt: card.createdAt })}
            </CreatedDate>
          </Text>
        </Link>
      )}
    </Cards>
  ));

  return <CardContainer>{cards}</CardContainer>;
}

export default CardList;
