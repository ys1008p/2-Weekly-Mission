import './LinkInput.css';
import LinkIcon from '../../../assets/link.svg';

function LinkInput() {
  return (
    <div className="LinkInput">
      <form className="LinkInput-form">
        <img src={LinkIcon} alt="링크" className="LinkInput-icon" />
        <input type="text" placeholder="링크를 추가해 보세요" className="LinkInput-input" />
        <button type="button" className="Button">
          추가하기
        </button>
      </form>
    </div>
  );
}

export default LinkInput;
