import "./SearchBar.css";
import { SEARCH_IMAGE, DELETE_IMAGE } from "./constant";

export const SearchBar = ({ value, onChange, onEnterPressed }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnterPressed();
    }
  };

  const handleCancelClick = () => {
    onChange("");
    onEnterPressed();
  };

  return (
    <div className="SearchBar">
      <input
        className="SearchBar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <img
        src={SEARCH_IMAGE}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
        className="SearchBar-SearchIcon"
      />
      <button onClick={handleCancelClick}>
        <img
          src={DELETE_IMAGE}
          alt="검색창에 입력된 값을 삭제하는 가위표 아이콘"
          className="SearchBar-DeleteIcon"
        />
      </button>
    </div>
  );
};
