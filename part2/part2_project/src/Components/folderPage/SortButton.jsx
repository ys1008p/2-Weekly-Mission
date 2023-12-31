import EditList from './EditList';
import addImg from '../../img/add.svg';
import '../../css/folderButtons.css';
import AddFolderModal from '../sharing/Modals/AddFolderModal';

export default function SortButton({
  isModal,
  handleModal,
  buttons,
  handleShowAll,
  yourPick,
  littleTitle,
}) {
  return (
    <>
      <section className="buttonLine">
        <ul className="list">
          <li>
            <button className="listUpButton " onClick={handleShowAll}>
              전체
            </button>
          </li>
          {buttons?.map((btn) => {
            return (
              <li key={btn.id}>
                <button
                  onClick={() => yourPick(btn.id, btn.name)}
                  className={`listUpButton ${
                    littleTitle === btn.name ? 'clickButton' : ''
                  }`}
                  links={btn.link}
                >
                  {btn.name}
                </button>
              </li>
            );
          })}
        </ul>
        <img
          className="addButton"
          src={addImg}
          alt="링크 추가 버튼"
          id="addLink"
          onClick={handleModal}
        />
      </section>
      <section className="buttonLine">
        <h2 className="littleTitle">{littleTitle || '전체'}</h2>
        {littleTitle && <EditList handleModal={handleModal} />}
      </section>
    </>
  );
}
