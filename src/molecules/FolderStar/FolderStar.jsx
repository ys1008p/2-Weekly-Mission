import { STAR_IMAGE } from "./constants";
import "./FolderStar.css";

export const FolderStar = () => {
  return <img className="folder-star" src={STAR_IMAGE} alt="폴더 별 표시" />;
};
