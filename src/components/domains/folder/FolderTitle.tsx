import styled from "styled-components";

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

interface CategoryProps {
  title: string;
  image: string;
}

const categoryList = [
  { title: "공유", image: `${process.env.PUBLIC_URL}/images/share.png` },
  { title: "이름 변경", image: `${process.env.PUBLIC_URL}/images/pen.png` },
  { title: "삭제", image: `${process.env.PUBLIC_URL}/images/delete.png` },
];

function Category({ category }: { category: CategoryProps }) {
  const { title, image } = category;
  return (
    <StyledCategory>
      <img src={image} alt={`${title} 아이콘`} />
      <div>{title}</div>
    </StyledCategory>
  );
}

function CategoryBox({ folder }: { folder: FolderProps }) {
  return (
    <StyledCategoryBox>
      <h1>{folder.name}</h1>
      {folder.name !== "전체" ? (
        <CategoryList>
          {categoryList.map((category) => (
            <Category key={category.title} category={category} />
          ))}
        </CategoryList>
      ) : null}
    </StyledCategoryBox>
  );
}

function FoldersTitle({
  folderList,
  id,
}: {
  folderList: FolderProps[];
  id: number;
}) {
  return (
    folderList?.length > 0 &&
    folderList.map((folder) => {
      if (folder.id === id) {
        return <CategoryBox key={folder.id} folder={folder} />;
      }
      return null;
    })
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

const StyledCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  gap: 1.2rem;
`;

export default FoldersTitle;
