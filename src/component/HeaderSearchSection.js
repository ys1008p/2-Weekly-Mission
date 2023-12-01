import "./HeaderSearchSection.css";

function HeaderSearchSection() {
  return (
    <section className="header-search-section-container">
      <form>
        <input type="text" placeholder="링크를 추가해 보세요" />
        <button type="submit">추가하기</button>
      </form>
    </section>
  );
}

export default HeaderSearchSection;
