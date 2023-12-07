import { useEffect, useState } from "react";
import useAsync from "../hooks/useAsync";
import { apiSettings, getApiInfo } from "../api";
import * as S from "./styled";
import FolderMainCard from "./FolderMainCard";

function FolderMainCards({ currentFolder }) {
  const [LinkList, setLinkList] = useState([]);
  const [isLinkListLoading, linkListError, getLinkLIstAsync] =
    useAsync(getApiInfo);

  const loadLinkList = async () => {
    const result = await getLinkLIstAsync(
      apiSettings.endpoints.userLinks,
      apiSettings.errorMessages.userLinks,
      currentFolder
    );
    if (!result) return;
    const { data } = result;
    setLinkList(data);
  };

  useEffect(() => {
    loadLinkList();
  }, [currentFolder]);

  return (
    <>
      {LinkList.length === 0 ? (
        <S.Nolink>
          <p>저장된 링크가 없습니다</p>
        </S.Nolink>
      ) : (
        <ul className="cards">
          {LinkList.map((item) => (
            <FolderMainCard
              key={item.id}
              item={item}
              target="_blank"
              rel="noreferrer"
            />
          ))}
          ;
        </ul>
      )}
    </>
  );
}

export default FolderMainCards;
