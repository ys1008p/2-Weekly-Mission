import nodata from "../images/nonedata.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mediaQuery from "../static/MediaQuery";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 25px;
  margin: 0 auto;
  width: 1060px;

  ${mediaQuery.tablet} {
    grid-template-columns: 0.3fr 0.3fr;
    width: auto;
    padding-left: 32px;
    padding-right: 32px;
    justify-content: center;
    column-gap: 24px;
    row-gap: 25px;
  }

  ${mediaQuery.mobile} {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
const StyledLink = styled(Link)`
  width: 340px;
  height: 334px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  overflow: hidden;
  &:hover {
    background-color: var(--bg);
  }
  &:hover img {
    transform: scale(1.3);
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 340px;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }
`;

const CardTextField = styled.div`
  display: flex;
  width: 340px;
  padding: 15px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  transition: background-color 0.3s ease-in-out;

  p {
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--black);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;
const ElapsedTime = styled.span`
  color: #666;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CreatedAt = styled.span`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const NoneData = styled.div`
  text-align: center;
`;

const TIME_MILISECONDS = {
  second: 1000,
  minute: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  month: 1000 * 60 * 60 * 24 * 31,
  year: 1000 * 60 * 60 * 24 * 31 * 12,
};
function LinkCard({ linkData }) {
  const { links } = linkData;
  return <LinksComponent links={links} />;
}

function FolderCard({ linkData }) {
  const transFormData = linkData.map((item) => {
    if (item.created_at) {
      item.createdAt = item.created_at;
      delete item.created_at;
    }
    if (item.image_source) {
      item.imageSource = item.image_source;
      delete item.image_source;
    }
    return item;
  });
  return transFormData.length ? (
    <LinksComponent links={transFormData} />
  ) : (
    <NoneData>저장된 데이터가 없습니다.</NoneData>
  );
}

function LinksComponent({ links }) {
  const getElapsedTime = ({ createdAt }) => {
    const now = new Date();
    const elapsedTime = now - new Date(createdAt);
    const { minute, hour, day, month, year } = TIME_MILISECONDS;
    if (year * 2 <= elapsedTime) {
      return `${Math.floor(elapsedTime / year)} year ago`;
    }
    if (year <= elapsedTime) {
      return `1 year ago`;
    }
    if (month * 2 <= elapsedTime) {
      return `${Math.floor(elapsedTime / month)} month ago`;
    }
    if (month <= elapsedTime) {
      return `1 month ago`;
    }
    if (day * 2 <= elapsedTime) {
      return `${Math.floor(elapsedTime / day)} days ago`;
    }
    if (day <= elapsedTime) {
      return `1 day ago`;
    }
    if (hour * 2 <= elapsedTime) {
      return `${Math.floor(elapsedTime / hour)} hours ago`;
    }
    if (hour <= elapsedTime) {
      return `1 hour ago`;
    }
    if (minute * 2 <= elapsedTime) {
      return `${Math.floor(elapsedTime / minute)} minutes ago`;
    }
    return `1 minute ago`;
  };
  const formatDate = (dateString) => {
    const date = dateString.split("T")[0];
    return `${date}`;
  };
  const alt = `${links?.title}의 로고`;
  return (
    <Card>
      {links.map((link) => (
        <StyledLink to={link.url} key={link.id}>
          <CardContainer>
            {link?.imageSource ? (
              <img src={link.imageSource} alt={alt} />
            ) : (
              <img src={nodata} alt="프로필 이미지" />
            )}
          </CardContainer>
          <CardTextField>
            <ElapsedTime>{getElapsedTime(link)}</ElapsedTime>
            <p>{link.description}</p>
            <CreatedAt>{formatDate(link.createdAt)}</CreatedAt>
          </CardTextField>
        </StyledLink>
      ))}
    </Card>
  );
}

export { LinkCard, FolderCard };
