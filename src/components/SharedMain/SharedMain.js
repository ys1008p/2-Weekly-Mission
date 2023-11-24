import './SharedMain.css';
import FolderInfo from '../FolderInfo/FolderInfo';
import SearchBar from '../atoms/SearchBar/SearchBar';
import CardList from '../CardList/CardList';
export default function SharedMain({ folder }) {
  const { owner, links } = folder;
  return (
    <div>
      <FolderInfo owner={owner} folderName={folder.name} />
      <article className="test">
        <SearchBar />
        <CardList links={links} />
      </article>
    </div>
  );
}
