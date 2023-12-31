import { useParams } from "react-router-dom";
import styled from "styled-components";
import Gnb from "../../components/commons/Gnb";
import AddLink from "../../components/domains/folder/AddLink";
import SearchBar from "../../components/commons/SearchBar";
import FolderLists from "../../components/domains/folder/FolderLists";
import Footer from "../../components/commons/Footer";
import FolderAddButton from "../../components/domains/folder/FolderAddButton";

function FolderPage() {
  const { folderId } = useParams();

  return (
    <>
      <Gnb />
      <main>
        <AddLink folderId={folderId} />
        <StyledFolder>
          <SearchBar />
          <FolderLists folderId={folderId} />
          <FolderAddButton folderId={folderId} />
        </StyledFolder>
      </main>
      <Footer />
    </>
  );
}

export default FolderPage;

const StyledFolder = styled.div`
  max-width: 106rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media (max-width: 1200px) {
    padding: 0 3.2rem;
  }
`;
