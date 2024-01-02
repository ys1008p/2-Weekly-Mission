import { Link } from "react-router-dom";
import "./SharedPage.css";
import { Layout } from "../../feature/Layout";
import "../../global.css";
import { FolderInfo } from "../../ui/FolderInfo";
import { SearchBar } from "../../ui/SearchBar";
import { CardList } from "../../ui/CardList";
import { useGetFolder } from "data-access/useGetFolder";
import { ReadOnlyCard } from "../../ui/ReadOnlyCard";
import { useState, useEffect } from "react";

export const SharedPage = ({ folderInfo, searchBar, cardList }) => {
  const { loading, data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};
  const [filteredLinks, setFilteredLinks] = useState(links);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchFolder = () => {
    const searchValueLower = searchValue.toLowerCase().split(" ");
    const newFilteredLinks = links?.filter((link) =>
      searchValueLower.some(
        (value) =>
          link.url.toLowerCase().includes(value) ||
          (link.title && link.title.toLowerCase().includes(value)) ||
          link.description.toLowerCase().includes(value)
      )
    );
    setFilteredLinks(newFilteredLinks);
  };

  useEffect(() => {
    if (!loading) {
      handleSearchFolder();
    }
  }, [loading]);

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
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onEnterPressed={handleSearchFolder}
          />
          <CardList>
            {filteredLinks?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        </div>
      </div>
    </Layout>
  );
};
