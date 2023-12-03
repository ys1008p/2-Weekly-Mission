import styled from "styled-components";

const categories = [
  { title: "공유", image: process.env.PUBLIC_URL + "/images/share.png" },
  { title: "이름 변경", image: process.env.PUBLIC_URL + "/images/pen.png" },
  { title: "삭제", image: process.env.PUBLIC_URL + "/images/delete.png" },
];

const CategoryBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:0.4rem;
font-size:1.4rem;
color:rgb(159, 166, 178);
`

function Category({ category }) {
  const { title, image } = category;
  return (
    <CategoryBox>
      <img src={image} alt={`${title} 아이콘`} />
      <div>{title}</div>
    </CategoryBox>
  );
}



const CategoriesBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size:2.4rem;
  margin-bottom: 2.4rem;
`;

const Categories = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:1.2rem;
`;


function TitleArea() {
  return (
    <>
      <CategoriesBox>
        <h1>유용한 글</h1>
        <Categories>{categories && categories.map((category) => <Category key={category.title} category={category} />)}</Categories>
      </CategoriesBox>
    </>
  );
}

export default TitleArea;
