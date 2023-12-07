import SearchBox from "../sharing/SearchBox";
import CardsList from "../sharing/CardsList";
import addImg from "../../img/add.svg";
import SortButton from "./SortButton";
import EditList from "./EditList";
import styled from "../../css/folder.buttons.module.css";

export default function Main({ buttons, cardData }) {
  const handleAllListbutton = (e) => {};

  return (
    <main>
      <SearchBox />

      <section className={styled.buttonLine}>
        <SortButton buttons={buttons} />
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
