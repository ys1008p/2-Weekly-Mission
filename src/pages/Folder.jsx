import React from "react";
import PageForm from "components/PageForm";
import { useFetcher } from "hooks/useFetcher";
import { getFolderList } from "utils/api";

const Folder = () => {
  const { data } = useFetcher("folder", getFolderList);
  console.log(data);
  return (
    <PageForm>
      <div>저장된 링크가 없습니다.</div>
    </PageForm>
  );
};

export default Folder;
