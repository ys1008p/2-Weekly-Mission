import { Link } from "react-router-dom";
import { Layout } from "feature/Layout";
import "./FolderPage.css";
import { useGetFolder } from "data-access/useGetFolder";
import { CardList } from "../../ui/CardList";
import { ReadOnlyCard } from "../../ui/ReadOnlyCard";
import { SearchBar } from "../../ui/SearchBar";
import { useState, useEffect } from "react";

export const FolderPage = () => {
  const { loading, data } = useGetFolder();
  const { links } = data || {};
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
      <div className="FolderPage">
        <div className="FolderPage-items">
          <Link to="/shared">sharedPage 가는 링크</Link>
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onEnterPressed={handleSearchFolder}
          />
          {!loading && (
            <CardList>
              {filteredLinks?.map((link) => (
                <ReadOnlyCard key={link?.id} {...link} />
              ))}
            </CardList>
          )}
        </div>
      </div>
    </Layout>
  );
};
