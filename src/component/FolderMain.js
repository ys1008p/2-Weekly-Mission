import { FolderCard } from "./FolderCard";
import "../css/main.css";
import { UserFolderList } from "./UserFolderList";
import pen from "../asset/pen.svg";
import deleteImg from "../asset/delete.svg";
import share from "../asset/share.svg";
import { useState } from "react";

function FolderMain({ folderInfo, userFolderList }) {
  const [selectedFolderInfo, setSelectedFolderInfo] = useState([]);
  const [selectedButton, setSelectedButton] = useState(false);

  const handleFolderClick = (info) => {
    setSelectedFolderInfo(info);
    setSelectedButton(true);
  };

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
      {userFolderList.length > 0 && (
        <UserFolderList
          names={userFolderList}
          onFolderClick={handleFolderClick}
        />
      )}
      {selectedFolderInfo.length > 0 || selectedButton === false ? (
        <div className="sharePenDeleteContent">
          <div>
            <p>유용한 글</p>
          </div>
          <div className="sharePenDeleteDiv">
            <button>
              <div>
                <img src={share} alt="shareImg" />
                <p>공유</p>
              </div>
            </button>
            <button>
              <div>
                <img src={pen} alt="penImg" />
                <p>이름변경</p>
              </div>
            </button>
            <button>
              <div>
                <img src={deleteImg} alt="deleteImg" />
                <p>삭제</p>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}

      {selectedButton === false ? (
        <FolderCard data={folderInfo} />
      ) : selectedFolderInfo.length > 0 ? (
        <FolderCard data={selectedFolderInfo} />
      ) : (
        <div>
          <p className="noLink">선택된 폴더에 저장된 링크가 없습니다.</p>
        </div>
      )}
    </main>
  );
}

export default FolderMain;
