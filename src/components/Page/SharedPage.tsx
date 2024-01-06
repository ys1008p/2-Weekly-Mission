import { useSharedPageFolder } from "../../hooks/sharedPageHooks";
import Card from "../Card";
import FolderOwner from "../FolderOwner";
import SearchBar from "../SearchBar";
import '../../styles/Folder.css';
import { LinkType, OwnerType } from "../../constants/type";

const SharedPage = () => {
  const folder = useSharedPageFolder();

  if(!folder) return;
  
  const { owner, name, links } : {owner:OwnerType, name:string, links:LinkType[]} = folder;

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
