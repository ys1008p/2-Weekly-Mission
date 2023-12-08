import addLink from "../../assets/add-link.png";
import useModal from "../../hooks/useModal";
import {
  AddLinkBar,
  AddLinkButton,
  AddLinkContainer,
  AddLinkImg,
  AddLinkInput,
} from "./AddLinkStyled";

function AddLink() {
  const { Modal, openModal } = useModal();
  return (
    <AddLinkBar>
      <AddLinkContainer>
        <AddLinkInput placeholder="링크를 추가해 보세요" />
        <AddLinkImg src={addLink} alt="링크 아이콘" />
        <AddLinkButton onClick={openModal}>추가하기</AddLinkButton>
        <Modal
          title="폴더에 추가"
          link="링크주소"
          list="123"
          button="추가하기"
          color="blue"
        ></Modal>
      </AddLinkContainer>
    </AddLinkBar>
  );
}

export default AddLink;
