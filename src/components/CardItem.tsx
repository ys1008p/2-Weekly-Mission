import { Link } from "react-router-dom";
import Popover from "./Popover";
import { ShardLink } from "utils/type";
import getDateAgo from "utils/getDateAgo";
import useHandleModal from "hooks/useHandleModal";
import { card } from "styles/card";
import Portal from "./Modal/Portal";
import Modal from "./Modal";
import { ReactComponent as KebobIcon } from "assets/icons/kebab.svg";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";

interface CardItemProps {
  data: ShardLink;
}

function CardItem({ data: { createdAt, url, description, imageSource } }: CardItemProps) {
  const { onModal, currentType, onClose, toggleModal } = useHandleModal();

  const timeAgo = getDateAgo(createdAt);
  const date = new Date(createdAt).toLocaleDateString();

  const handleDeleteLink = () => {
    toggleModal("deleteLink");
  };

  const handleAddToFolder = () => {
    toggleModal("addFolder");
  };

  const popoverContent = [
    {
      title: "삭제하기",
      fn: handleDeleteLink,
    },
    {
      title: "폴더에 추가",
      fn: handleAddToFolder,
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
          <Portal>{onModal && <Modal currentType={currentType} onClose={onClose} />}</Portal>
        </card.FlaverHeader>
        <card.Description>{description}</card.Description>
        <card.CreateAt>{date}</card.CreateAt>
      </card.Flavor>
    </card.Container>
  );
}

export default CardItem;
