import React, { useEffect, useState } from "react";
import PageForm from "components/PageForm";
import { useFetcher } from "hooks/useFetcher";
import { getFolderList, getSelectedFolder } from "utils/api";
import CardList from "components/CardList";
import { folderIcon } from "assets/icons/folder";
import { tagComponent } from "assets/styles/tag";
import Fab from "components/Fab";
import { FOLDER_OPTION_NAME } from "utils/constants";
import { folder } from "assets/styles/folder";
import FolderInfo from "components/FolderInfo";

const Folder = () => {
  const [selected, setSelected] = useState({
    name: "전체",
    links: [],
  });
  const { data } = useFetcher("folder", getFolderList);

  const onClick = async (name, folderId) => {
    try {
      const links = await getSelectedFolder(folderId);

      setSelected((prev) => ({ ...prev, name, links }));
    } catch (e) {
      console.log(e);
    }
  };

  //컴포넌트 랜더링 시, 전체 옵션을 기본 값으로 설정
  useEffect(() => {
    const fetched = async () => {
      const links = await getSelectedFolder();
      setSelected((prev) => ({ ...prev, links }));
    };
    fetched();
  }, []);

  return (
    <>
      <FolderInfo />
      <PageForm>
        {data ? (
          <>
            <folder.Sorts>
              <tagComponent.TageList>
                <tagComponent.Tag
                  onClick={() => onClick("전체")}
                  selected={selected.name === "전체"}
                >
                  전체
                </tagComponent.Tag>
                {data.map((folder) => {
                  return (
                    <tagComponent.Tag
                      key={folder.id}
                      onClick={() => onClick(folder.name, folder.id)}
                      selected={selected.name === folder.name}
                    >
                      {folder.name}
                    </tagComponent.Tag>
                  );
                })}
              </tagComponent.TageList>
              <Fab />
            </folder.Sorts>
            <folder.FolderHeader>
              <folder.FolderName>{selected.name}</folder.FolderName>
              {selected.name !== "전체" && selected.name && (
                <>
                  <folder.FolderOption>
                    {Object.entries(folderIcon).map(([iconName, Icon]) => (
                      <folder.Option key={iconName}>
                        <Icon />
                        <span>{FOLDER_OPTION_NAME[iconName]}</span>
                      </folder.Option>
                    ))}
                  </folder.FolderOption>
                </>
              )}
            </folder.FolderHeader>
            <CardList folder={selected?.links} />
          </>
        ) : (
          <div>저장된 링크가 없습니다.</div>
        )}
      </PageForm>
    </>
  );
};

export default Folder;
