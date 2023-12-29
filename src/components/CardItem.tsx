import { Link } from "react-router-dom";
import getDateAgo from "utils/getDateAgo";
import { card } from "styles/card";
import { ReactComponent as KebobIcon } from "assets/icons/kebab.svg";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";
import { ShardLink } from "utils/type";

interface CardItemProps {
  data: ShardLink;
}

const CardItem: React.FC<CardItemProps> = ({ data: { createdAt, url, description, imageSource } }) => {
  const timeAgo = getDateAgo(createdAt);
  const date = new Date(createdAt).toLocaleDateString();

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
          <KebobIcon />
        </card.FlaverHeader>
        <card.Description>{description}</card.Description>
        <card.CreateAt>{date}</card.CreateAt>
      </card.Flavor>
    </card.Container>
  );
};

export default CardItem;
