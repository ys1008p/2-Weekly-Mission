import React, { useEffect, useState } from "react";
import PageForm from "components/PageForm";
import { useFetcher } from "hooks/useFetcher";
import { getFolderList, getSelectedFolder } from "utils/api";
import styled from "styled-components";
import CardList from "components/CardList";
import { folderIcon } from "assets/icons/folder";
import { tagComponent } from "assets/styles/tag";
import Fab from "components/Fab";
import { FOLDER_OPTION_NAME } from "utils/constants";

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
    <PageForm>
      {data ? (
        <>
          <Sorts>
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
          </Sorts>
          <FolderHeader>
            <FolderName>{selected.name}</FolderName>
            {selected.name !== "전체" && selected.name && (
              <>
                <FolderOption>
                  {Object.entries(folderIcon).map(([iconName, Icon]) => (
                    <Option key={iconName}>
                      <Icon />
                      <span>{FOLDER_OPTION_NAME[iconName]}</span>
                    </Option>
                  ))}
                </FolderOption>
              </>
            )}
          </FolderHeader>
          <CardList folder={selected?.links} />
        </>
      ) : (
        <div>저장된 링크가 없습니다.</div>
      )}
    </PageForm>
  );
};

export default Folder;

const Sorts = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const FolderHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    flex-direction: column;
    gap: 12px;
  }
`;

const FolderName = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;
const FolderOption = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  color: ${(props) => props.theme.gray600};
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`;
