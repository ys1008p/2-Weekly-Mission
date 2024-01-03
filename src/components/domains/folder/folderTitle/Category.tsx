import styled from "styled-components";
import useModal from "../../../../hook/useModal.ts";

interface CategoryProps {
  title: string;
  image: string;
}

function Category({ category }: { category: CategoryProps }) {
  const { title, image } = category;
  const { openModal } = useModal();

  const handleCategoryClick = (categoryTitle: string) => {
    if (categoryTitle === "삭제") {
      openModal("folderDelete");
    }
  };

  return (
    <StyledCategory
      onClick={() => {
        handleCategoryClick(title);
      }}
    >
      <img src={image} alt={`${title} 아이콘`} />
      <div>{title}</div>
    </StyledCategory>
  );
}

const StyledCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
`;

export default Category;
