import { Link } from "react-router-dom";
import getDateAgo from "utils/getDateAgo";
import { card } from "styles/card";
import { ReactComponent as KebobIcon } from "assets/icons/kebab.svg";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";
import { ShardLink } from "utils/type";
import Popover from "./Popover";

interface CardItemProps {
  data: ShardLink;
}

const CardItem: React.FC<CardItemProps> = ({ data: { createdAt, url, description, imageSource } }) => {
  const timeAgo = getDateAgo(createdAt);
  const date = new Date(createdAt).toLocaleDateString();

  const popoverContent = [
    {
      title: "삭제하기",
      fn: () => {
        console.log("삭제하기");
      },
    },
    {
      title: "폴더에 추가",
      fn: () => {
        console.log("추가하기");
      },
    },
  ];

  return (
    <card.Container>
      <card.ImageContainer>
        <Link to={url} target="_blank">
          <card.Image $imageSource={imageSource} />
        </Link>
        <StarIcon />
      </card.ImageContainer>
      <card.Flavor>
        <card.FlaverHeader>
          <card.Posted>{timeAgo}</card.Posted>
          <Popover content={popoverContent}>
            <KebobIcon />
          </Popover>
        </card.FlaverHeader>
        <card.Description>{description}</card.Description>
        <card.CreateAt>{date}</card.CreateAt>
      </card.Flavor>
    </card.Container>
  );
};

export default CardItem;
