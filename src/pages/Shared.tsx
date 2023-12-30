import { useEffect, useState } from "react";
import PageLayout from "./PageLayout";
import CardList from "components/CardList";
import SharedInfo from "components/ShardInfo";
import { useFetcher } from "hooks/useFetcher";
import { getShared } from "utils/api";
import { ShardData, ShardLink } from "utils/type";

function Shared() {
  const [search, setSearch] = useState<string>("");
  const [filteredLinks, setFilteredLinks] = useState<ShardLink[]>([]);

  const { data } = useFetcher<ShardData>("shared", getShared);
  const links = data?.links as ShardLink[];

  useEffect(() => {
    //search가 변경될 때마다 디바운싱을 걸어 마지막 입력된 값을
    //selected.links에서 filter를 검.
    const debounce = setTimeout(() => {
      if (search) {
        const filtered = links.filter(
          (link) =>
            (link.url && link.url.includes(search)) ||
            (link.title && link.title.includes(search)) ||
            (link.description && link.description.includes(search))
        );
        setFilteredLinks(filtered);
      } else {
        setFilteredLinks(links);
      }
    }, 1000);

    return () => clearTimeout(debounce);
  }, [search, links]);

  return (
    <>
      <SharedInfo folder={data} />
      <PageLayout search={search} setSearch={setSearch}>
        {data ? <CardList folder={filteredLinks} /> : <div>저장된 링크가 없습니다.</div>}
      </PageLayout>
    </>
  );
}

export default Shared;
