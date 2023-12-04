import { useSharedPageFolder } from "../../hooks/sharedPageHooks";
import Card from "../Card";
import FolderOwner from "../FolderOwner";
import SearchBar from "../SearchBar";
import '../../styles/Folder.css';

const SharedPage = () => {
  const folder = useSharedPageFolder();

  if(!folder) return;
  
  const { owner, name, links } = folder;

  return(
    <main className="contents folder-link--main">
      <FolderOwner owner={owner} name={name} />
      <SearchBar/>
      <section className="card--section">
        {links.map((link) => <Card key={link.id} link={link} />)}
      </section>
    </main>
  )
};

export default SharedPage
