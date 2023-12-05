import styled from "styled-components";
import FAB from "../../assets/FAB.png";

const FolderAddButton = styled.button`
  display: none;
  background-image: url(${FAB});
  background-size: cover;
  width: 13.5rem;
  height: 3.6rem;
  cursor: pointer;

  @media (max-width: 767px) {
    display: block;
    position: sticky;
    bottom: 101px;
    margin: auto;
  }
`;

export default FolderAddButton;
