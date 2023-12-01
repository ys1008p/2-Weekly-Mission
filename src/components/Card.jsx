import React from "react";
import useDateAgo from "hooks/useDateAgo";
import { card } from "assets/styles/card";
import { Link } from "react-router-dom";

const CardItem = ({ data: { createdAt, url, description, imageSource } }) => {
  const timeAgo = useDateAgo(createdAt);
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <Link to={url} target="_blank">
      <card.Wrapper>
        <card.Image $imageSource={imageSource} />
        <card.Flavor>
          <card.Posted>{timeAgo}</card.Posted>
          <card.Description>{description}</card.Description>
          <card.CreateAt>{date}</card.CreateAt>
        </card.Flavor>
      </card.Wrapper>
    </Link>
  );
};

export default CardItem;
