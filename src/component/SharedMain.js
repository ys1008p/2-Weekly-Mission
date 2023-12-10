import "../css/main.css";
import { SharedCard } from "./SharedCard";
function SharedMain({ sharedFolderInfo }) {
  return (
    <main>
      <form>
        <div className="custom-placeholder">
          <input
            name="search"
            className="searchInput"
            placeholder="링크를 검색해보세요"
          />
        </div>
      </form>
      {sharedFolderInfo.id && <SharedCard links={sharedFolderInfo?.links} />}
    </main>
  );
}
export default SharedMain;
