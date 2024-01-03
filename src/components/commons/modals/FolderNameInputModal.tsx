import CloseButton from "./CloseButton.tsx";
import { InputModalBox, ModalLayout } from "./styledModal.ts";

function FolderNameChangeModal() {
  return (
    <ModalLayout>
      <InputModalBox>
        <CloseButton />
        <h3>폴더 이름 변경</h3>
        <button type="button">변경하기</button>
        <input placeholder="유용한 팁" />
      </InputModalBox>
    </ModalLayout>
  );
}

export default FolderNameChangeModal;
