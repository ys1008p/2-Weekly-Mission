import React from "react";
import useDateAgo from "hooks/useDateAgo";
import { card } from "assets/styles/card";
import { Link } from "react-router-dom";
import { ReactComponent as KebobIcon } from "assets/icons/kebab.svg";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";

const CardItem = ({ data: { createdAt, url, description, imageSource } }) => {
  const timeAgo = useDateAgo(createdAt);
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
