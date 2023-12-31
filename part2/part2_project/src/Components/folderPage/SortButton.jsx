import EditList from './EditList';
import addImg from '../../img/add.svg';
import '../../css/folderButtons.css';
import AddFolderModal from '../Modals/AddFolderModal';

export default function SortButton({
  isModal,
  handleModal,
  buttons,
  handleShowAll,
  yourPick,
  littleTitle,
}) {
  console.log(buttons);
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
          id="al"
          onClick={() => handleModal(id)}
        />
      </section>
      <section className="buttonLine">
        <h2 className="littleTitle">{littleTitle || '전체'}</h2>
        {littleTitle && <EditList handleModal={handleModal} />}
      </section>
      {isModal === 'al' && <AddFolderModal id="al" handleModal={handleModal} />}
    </>
  );
}
