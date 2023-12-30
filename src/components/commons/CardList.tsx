import styled from "styled-components";
import Card from "./Card.tsx";

interface selectFolderLinksProps {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at?: string;
  url: string;
}

function CardList({
  selectFolderLinks,
}: {
  selectFolderLinks: selectFolderLinksProps[];
}) {
  return (
    <CardWrapper>
      {selectFolderLinks?.map((link) => <Card key={link.id} link={link} />)}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0 auto;
  width: 1;

  @media (max-width: 1200px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default CardList;
