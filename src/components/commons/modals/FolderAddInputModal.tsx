import { InputModalBox, ModalLayout } from "./styledModal.ts";
import CloseButton from "./CloseButton.tsx";

function FolderAddInputModal() {
  return (
    <ModalLayout>
      <InputModalBox>
        <CloseButton />
        <h3>폴더 추가</h3>
        <input placeholder="내용 입력" />
        <button type="button">변경하기</button>
      </InputModalBox>
    </ModalLayout>
  );
}

export default FolderAddInputModal;
