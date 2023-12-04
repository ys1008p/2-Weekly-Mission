import { FolderAddLink } from "../FolderAddLink/index";
import "./FolderNavList.css";

export const FolderNavList = ({ children }) => {
  // console.log(`>> FolderNavList >>>>>>>>>>>>>`);
  // console.log(children);

  return (
    <div className="folder-nav-wrap">
      <div>{children}</div>
      <FolderAddLink />
    </div>
  );
};
