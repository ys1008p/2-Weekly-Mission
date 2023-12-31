import styled from "styled-components";
import Category from "./Category.tsx";

interface LinkProps {
  id: number;
  create_at: string;
  image_source: string;
  title: string;
  url: string;
}

interface FolderProps {
  id: number;
  favorite: boolean;
  name: string;
  user_id: number;
  links: LinkProps[];
}

const categoryList = [
  { title: "공유", image: `${process.env.PUBLIC_URL}/images/share.png` },
  { title: "이름 변경", image: `${process.env.PUBLIC_URL}/images/pen.png` },
  { title: "삭제", image: `${process.env.PUBLIC_URL}/images/delete.png` },
];

function CategoryBox({ folder }: { folder: FolderProps }) {
  return (
    <StyledCategoryBox>
      <h1>{folder.name}</h1>
      {folder.name !== "전체" ? (
        <CategoryList>
          {categoryList.map((category) => (
            <Category key={folder.id} category={category} />
          ))}
        </CategoryList>
      ) : null}
    </StyledCategoryBox>
  );
}

const StyledCategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.4rem;
  margin-bottom: 2.4rem;
  width: 106rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  gap: 1.2rem;
`;

export default CategoryBox;
