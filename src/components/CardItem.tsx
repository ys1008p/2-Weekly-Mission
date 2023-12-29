import { Link } from "react-router-dom";
import Popover from "./Popover";
import { ShardLink } from "utils/type";
import getDateAgo from "utils/getDateAgo";
import { card } from "styles/card";
import { ReactComponent as KebobIcon } from "assets/icons/kebab.svg";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";
import Portal from "./Modal/Portal";
import Modal from "./Modal";
import { useState } from "react";

interface CardItemProps {
  data: ShardLink;
}

const CardItem: React.FC<CardItemProps> = ({ data: { createdAt, url, description, imageSource } }) => {
  const [modalOn, setModalOn] = useState<boolean>(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  const timeAgo = getDateAgo(createdAt);
  const date = new Date(createdAt).toLocaleDateString();

  const popoverContent = [
    {
      title: "삭제하기",
      fn: handleModal,
    },
    {
      title: "폴더에 추가",
      fn: handleModal,
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
          <Portal>{modalOn && <Modal onClose={handleModal} />}</Portal>
        </card.FlaverHeader>
        <card.Description>{description}</card.Description>
        <card.CreateAt>{date}</card.CreateAt>
      </card.Flavor>
    </card.Container>
  );
};

export default CardItem;
