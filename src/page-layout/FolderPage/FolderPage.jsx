import { Link } from "react-router-dom";
import { Layout } from "feature/Layout";
import "./FolderPage.css";
import { useGetFolder } from "data-access/useGetFolder";
import { CardList } from "../../ui/CardList";
import { ReadOnlyCard } from "../../ui/ReadOnlyCard";
import { SearchBar } from "../../ui/SearchBar";

export const FolderPage = () => {
  const { data } = useGetFolder();
  const { links } = data || {};

  return (
    <Layout>
      <div className="FolderPage">
        <div className="FolderPage-items">
          <Link to="/shared">sharedPage 가는 링크</Link>
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
