import { Link } from "react-router-dom";
import "./SharedPage.css";
import { Layout } from "../../feature/Layout";
import "../../global.css";
import { FolderInfo } from "../../ui/FolderInfo";
import { SearchBar } from "../../ui/SearchBar";
import { CardList } from "../../ui/CardList";
import { useGetFolder } from "data-access/useGetFolder";
import { ReadOnlyCard } from "../../ui/ReadOnlyCard";

export const SharedPage = ({ folderInfo, searchBar, cardList }) => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <Layout>
      <div className="SharedPage">
        <FolderInfo
          profileImage={profileImage}
          ownerName={ownerName}
          folderName={folderName}
        />
        <div className="SharedPage-items">
          <Link to="/folder">folder가는 링크</Link>
          <SearchBar />
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        </div>
      </div>
    </Layout>
  );
};
