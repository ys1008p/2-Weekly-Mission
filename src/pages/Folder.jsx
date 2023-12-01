import React, { useState } from "react";
import PageForm from "components/PageForm";
import { useFetcher } from "hooks/useFetcher";
import { getFolderList, getSelectedFolder } from "utils/api";
import styled from "styled-components";
import add from "assets/icons/add.svg";
import CardList from "components/CardList";
import { folderOptions } from "assets/icons/folderOptions";

const Folder = () => {
  const [selected, setSelected] = useState({
    name: null,
    links: [],
  });
  const { data } = useFetcher("folder", getFolderList);

  const onClick = async (name, folderId) => {
    try {
      const links = await getSelectedFolder(folderId);

      //재사용 컴포넌트와 데이터 구조 맞춤.
      const convertLinks = links.map((link) => ({
        id: link.id,
        updatedAt: link.update_at,
        description: link.description,
        url: link.url,
        title: link.title,
        folderId: link.folder_id,
        imageSource: link.image_source,
        createdAt: link.created_at,
      }));

      setSelected((prev) => ({ ...prev, name, links: convertLinks }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PageForm>
      {data ? (
        <>
          <Sorts>
            <TageList>
              <FolderSortTag
                onClick={() => onClick("전체")}
                selected={selected.name === "전체"}
              >
                전체
              </FolderSortTag>
              {data.map((folder) => {
                return (
                  <FolderSortTag
                    key={folder.id}
                    onClick={() => onClick(folder.name, folder.id)}
                    selected={selected.name === folder.name}
                  >
                    {folder.name}
                  </FolderSortTag>
                );
              })}
            </TageList>
            <img src={add} alt={"add"} />
          </Sorts>
          <FolderHeader>
            <FolderName>{selected.name}</FolderName>
            {selected.name !== "전체" && selected.name && (
              <>
                <FolderOption>
                  <Option>
                    <img src={folderOptions.shareIcon} alt="공유" />
                    <span>공유</span>
                  </Option>
                  <Option>
                    <img src={folderOptions.penIcon} alt="수정" />
                    <span>이름 변경</span>
                  </Option>
                  <Option>
                    <img src={folderOptions.deleteIcon} alt="삭제하기" />
                    <span>삭제</span>
                  </Option>
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
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`;

const TageList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

const FolderSortTag = styled.li`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;

  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primary};
  background: ${(props) =>
    props.selected ? props.theme.primary : props.theme.white};
  color: ${(props) => (props.selected ? props.theme.white : props.theme.black)};
  cursor: pointer;
`;

const FolderHeader = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
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
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`;
