import React from "react";
import PageForm from "components/PageForm";
import CardList from "components/CardList";
import { useFetcher } from "hooks/useFetcher";
import { getShared } from "utils/api";
import SharedInfo from "components/ShardInfo";

const Shared = () => {
  const { data } = useFetcher("shared", getShared);
  console.log(data);
  return (
    <>
      <SharedInfo folder={data} />
      <PageForm>
        {data ? (
          <CardList folder={data.links} />
        ) : (
          <div>저장된 링크가 없습니다.</div>
        )}
      </PageForm>
    </>
  );
};

export default Shared;
