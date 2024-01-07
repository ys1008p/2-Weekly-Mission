import { SHARE_IMAGE, PEN_IMAGE, DELETE_IMAGE } from "./constatns";
import "./FolderFeature.css";

export const FolderFeature = () => {
  return (
    <div className="folder-feature-wrap">
      <h1>유용한 글</h1>
      <div className="feature-list">
        <div className="feature">
          <button>
            <img src={SHARE_IMAGE} alt="폴더 공유" />
            <span>공유</span>
          </button>
        </div>
        <div className="feature">
          <button>
            <img src={PEN_IMAGE} alt="폴더 이름변경" />
            <span>이름 변경</span>
          </button>
        </div>
        <div className="feature">
          <button>
            <img src={DELETE_IMAGE} alt="폴더 삭제" />
            <span>삭제</span>
          </button>
        </div>
      </div>
    </div>
  );
};
