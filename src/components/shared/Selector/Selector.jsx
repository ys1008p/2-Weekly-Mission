import './Selector.css';

export default function Selector({ openLinkDeleteModal, openLinkAddToFolderModal }) {
  return (
    <div className="Selector">
      <button
        onClick={(e) => {
          e.preventDefault();
          openLinkDeleteModal();
        }}
        className="Sector__option "
      >
        삭제하기
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          openLinkAddToFolderModal();
        }}
        className="Sector__option "
      >
        폴더에 추가
      </button>
    </div>
  );
}
