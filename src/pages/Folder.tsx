import { useEffect, useState } from "react";
import { folder } from "styles/folder";
import { tagComponent } from "styles/tag";
import PageForm from "components/PageForm";
import CardList from "components/CardList";
import FolderInfo from "components/FolderInfo";
import Fab from "components/Fab";
import { useFetcher } from "hooks/useFetcher";
import { FOLDER_OPTION_NAME } from "utils/constants";
import { getFolderList, getSelectedFolder } from "utils/api";
import { folderIcon } from "assets/icons/folder";
import { FolderData } from "utils/type";

interface SelectedFolder {
  name: string;
  links: any[];
}

function Folder() {
  const [selected, setSelected] = useState<SelectedFolder>({
    name: "전체",
    links: [],
  });

  const { data } = useFetcher<FolderData[]>("folder", getFolderList);

  const onClick = async (name: string, folderId?: number) => {
    try {
      const links = await getSelectedFolder(folderId);

      setSelected((prev) => ({ ...prev, name, links }));
    } catch (e) {
      console.log(e);
    }
  };

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
                <tagComponent.Tag onClick={() => onClick("전체")} selected={selected.name === "전체"}>
                  전체
                </tagComponent.Tag>
                {data.map((folder) => (
                  <tagComponent.Tag
                    key={folder.id}
                    onClick={() => onClick(folder.name, folder.id)}
                    selected={selected.name === folder.name}
                  >
                    {folder.name}
                  </tagComponent.Tag>
                ))}
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
}

export default Folder;
