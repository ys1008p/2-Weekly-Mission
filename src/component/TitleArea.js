import styled from "styled-components";

const categoryList = [
  { title: "공유", image: process.env.PUBLIC_URL + "/images/share.png" },
  { title: "이름 변경", image: process.env.PUBLIC_URL + "/images/pen.png" },
  { title: "삭제", image: process.env.PUBLIC_URL + "/images/delete.png" },
];
// 카테고리는 세개이다 map을 이용해 만든다
// 카테고리 박스를 글씨 영역에 타이틀과 함께 넣어준다
const StyledCategoryBox = styled.div``;

const StyledCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

function Category({ category }) {
  const { title, image } = categoryList;
  return (
    <StyledCategory>
      <img src={image} alt={`${title} 아이콘`} />
      <div>{title}</div>
    </StyledCategory>
  );
}

function CategoryBox({ folder }) {
  return (
    <StyledCategoryBox>
      <h1>{folder.name}</h1>
      {categoryList.map((category) => (
        <Category category={category} />
      ))}
    </StyledCategoryBox>
  );
}

function TitleArea({ folders,id }) {
  
  return 
  <>
   {folders &&
        folders
          .filter((folder) => folder.id === id)
          .map((filteredFolder) => <CategoryBox folder={filteredFolder} />)}
  </>
}

export default TitleArea;
