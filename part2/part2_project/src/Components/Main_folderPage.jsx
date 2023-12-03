import SearchBox from "./SearchBox";
import CardsList from "./CardsList";
import styled from "../css/folder.buttons.module.css";
import addImg from "../img/add.svg";
import EditList from "./EditList";

export default function Main({ buttons, cardData }) {
  return (
    <main>
      <SearchBox />
      <section className={styled.buttonLine}>
        <ul className={styled.list}>
          <li>
            <button>전체</button>
          </li>
          {buttons?.map((btn) => {
            return (
              <li key={btn.id}>
                <button links={btn.link}>{btn.name}</button>
              </li>
            );
          })}
        </ul>
        <img className={styled.addButton} src={addImg} alt="링크 추가 버튼" />
      </section>
      <section className={styled.buttonLine}>
        <h2 className={styled.littleTitle}>전체</h2>
        <EditList />
      </section>
      <CardsList cardData={cardData} />
    </main>
  );
}
