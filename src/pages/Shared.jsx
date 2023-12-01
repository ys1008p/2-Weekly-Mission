import React from "react";
import PageForm from "components/PageForm";
import CardList from "components/CardList";
import { useFetcher } from "hooks/useFetcher";
import { getShared } from "utils/api";

const Shared = () => {
  const { data } = useFetcher("shared", getShared);
  return (
    <PageForm>
      {data ? (
        <CardList folder={data.links} />
      ) : (
        <div>저장된 링크가 없습니다.</div>
      )}
    </PageForm>
  );
};

export default Shared;
