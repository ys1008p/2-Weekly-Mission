import "../../../css/modal.css";
const DeleteFolderModal = () => {
  return (
    <>
      <div className="modalTitle">
        <div>폴더 삭제</div>
        <div className="modalSubTitle">폴더명</div>
      </div>

      <button className="modalDeleteButton">삭제하기</button>

      <div></div>
    </>
  );
};

export default DeleteFolderModal;
