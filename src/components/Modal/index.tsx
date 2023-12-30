import { modal } from "styles/modal";
import Add from "./item/Add";
import DeleteLink from "./item/DeleteLink";
import DeleteFolder from "./item/DeleteFolder";
import Share from "./item/Share";
import { MouseEvent } from "react";
import AddFolder from "./item/AddFolder";
import Edit from "./item/Edit";
import { MODAL_TYPE } from "utils/constants";

interface ModalProps {
  currentType?: string;
  onClose: () => void;
}
function Modal({ currentType, onClose }: ModalProps) {
  let contents;
  switch (currentType) {
    case MODAL_TYPE.edit:
      contents = <Edit />;
      break;
    case MODAL_TYPE.addFolder:
      contents = <AddFolder />;
      break;
    case MODAL_TYPE.share:
      contents = <Share />;
      break;
    case MODAL_TYPE.delete:
      contents = <DeleteFolder />;
      break;
    case MODAL_TYPE.deleteLink:
      contents = <DeleteLink />;
      break;
    case MODAL_TYPE.add:
      contents = <Add />;
      break;
    default:
      contents = <div>이것은 모달이여</div>;
  }

  const stopEventBubbling = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <modal.BackGround onClick={onClose}>
      <modal.ContentWrapper onClick={stopEventBubbling}>
        <modal.ContentItem>
          <modal.Close onClick={onClose} />
          {contents}
        </modal.ContentItem>
      </modal.ContentWrapper>
    </modal.BackGround>
  );
}

export default Modal;
