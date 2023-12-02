import "../styles/Items.css";

// 처음 창이 열렸을 때 folder 파일이 배치되어야 함
function Items() {
  return (
    <ul className="content-info-text">
      <p className="calc-time">10 minutes ago</p>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
        consequat.
      </p>
      <p className="date">2023. 3. 15</p>
    </ul>
  );
}

export default Items;
