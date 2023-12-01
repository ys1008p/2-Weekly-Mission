import React from "react";
import CardItem from "./Card";
import { card } from "assets/styles/card";
const CardList = ({ folder, type }) => {
  return (
    <card.Wrapper>
      {type && <div>links</div>}
      {folder?.map((data) => {
        return <CardItem key={data.id} data={data} />;
      })}
    </card.Wrapper>
  );
};

export default CardList;
