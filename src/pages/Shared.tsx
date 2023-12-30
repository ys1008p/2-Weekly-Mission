import PageLayout from "./PageLayout";
import CardList from "components/CardList";
import SharedInfo from "components/ShardInfo";
import { useFetcher } from "hooks/useFetcher";
import { getShared } from "utils/api";
import { ShardData } from "utils/type";

function Shared() {
  const { data } = useFetcher<ShardData>("shared", getShared);
  return (
    <>
      <SharedInfo folder={data} />
      <PageLayout>{data ? <CardList folder={data.links} /> : <div>저장된 링크가 없습니다.</div>}</PageLayout>
    </>
  );
}

export default Shared;
