import "../SharedPage/SharedPage.css";

export const FolderPage = ({
  linkAddBar,
  searchBar,
  folderNavList,
  folderFeature,
  cardList,
}) => {
  return (
    <div className="SharedPage">
      {linkAddBar}
      <div className="SharedPage-items">
        {searchBar}
        {folderNavList}
        {folderFeature}
        {cardList}
      </div>
    </div>
  );
};
