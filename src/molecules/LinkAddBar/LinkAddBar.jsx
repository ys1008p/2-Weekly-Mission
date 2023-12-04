import { TEXT, LINK_ADD_IMAGE } from "./constant";
import "./LinkAddBar.css";

export const LinkAddBar = () => {
  return (
    <div className="folder-wrap">
      <div className="linkBar-outer-wrap">
        <div className="linkBar-inner-wrap">
          <div className="link-add-wrap">
            <img
              className="link-add-image"
              src={LINK_ADD_IMAGE}
              alt="링크를 추가해보세요"
            />
            <span>{TEXT.placeholder}</span>
          </div>
          <button>{TEXT.ctaText}</button>
        </div>
      </div>
    </div>
  );
};
