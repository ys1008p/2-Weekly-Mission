import styled from "styled-components";
import CardItem from "./CardItem";
import { card } from "styles/card";
import { ShardLink } from "utils/type";
import React from "react";

interface CardListPrsop {
  folder: ShardLink[] | undefined;
}
const CardList: React.FC<CardListPrsop> = ({ folder }) => {
  return (
    <>
      <card.Wrapper>
        {folder?.map((data) => {
          return <CardItem key={data.id} data={data} />;
        })}
      </card.Wrapper>
      {folder && !folder.length && (
        <NoLinks>
          <ErrorMessage>저장된 링크가 없습니다.</ErrorMessage>
        </NoLinks>
      )}
    </>
  );
};

export default CardList;

const NoLinks = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
