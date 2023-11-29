import Card from "./Card";
import FolderOwner from "./FolderOwner";
import SearchBar from "./SearchBar";
import '../styles/Folder.css';

const Folder = ({ owner, name, links }) => {
  return(
    <main className="contents folder-link--main">
      <FolderOwner owner={owner} name={name}></FolderOwner>
      <SearchBar></SearchBar>
      <section className="card--section">
        {links.map((link) => <Card key={link.id} link={link}></Card>)}
      </section>
    </main>
  )
};

export default Folder
