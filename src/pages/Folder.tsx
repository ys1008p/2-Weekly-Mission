import { useEffect, useState } from "react";
import CardList from "components/CardList";
import FolderInfo from "components/FolderInfo";
import Fab from "components/Fab";
import Portal from "components/Modal/Portal";
import Modal from "components/Modal";
import useHandleModal from "hooks/useHandleModal";
import { useFetcher } from "hooks/useFetcher";
import { FOLDER_OPTION_NAME } from "utils/constants";
import { FolderData, FolderLink } from "utils/type";
import { getFolderList, getSelectedFolder } from "utils/api";
import { folder } from "styles/folder";
import { tagComponent } from "styles/tag";
import { folderIcon } from "assets/icons/folder";
import PageLayout from "./PageLayout";

interface SelectedFolder {
  name: string;
  links: FolderLink[];
}

function Folder() {
  const [selected, setSelected] = useState<SelectedFolder>({
    name: "전체",
    links: [],
  });
  const [search, setSearch] = useState<string>("");
  const [filteredLinks, setFilteredLinks] = useState<FolderLink[]>([]);

  const { onModal, currentType, onClose, toggleModal } = useHandleModal();

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
    //search가 변경될 때마다 디바운싱을 걸어 마지막 입력된 값을
    //selected.links에서 filter를 검.
    const debounce = setTimeout(() => {
      if (search) {
        const filtered = selected.links.filter(
          (link) =>
            (link.url && link.url.includes(search)) ||
            (link.title && link.title.includes(search)) ||
            (link.description && link.description.includes(search))
        );
        setFilteredLinks(filtered);
      } else {
        setFilteredLinks(selected.links);
      }
    }, 1000);

    return () => clearTimeout(debounce);
  }, [search, selected.links]);

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
      <PageLayout search={search} setSearch={setSearch}>
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
                      <folder.Option key={iconName} onClick={() => toggleModal(iconName)}>
                        <Icon />
                        <span>{FOLDER_OPTION_NAME[iconName]}</span>
                      </folder.Option>
                    ))}
                  </folder.FolderOption>
                </>
              )}
            </folder.FolderHeader>
            <CardList folder={filteredLinks} />
          </>
        ) : (
          <div>저장된 링크가 없습니다.</div>
        )}
      </PageLayout>
      <Portal>{onModal && <Modal currentType={currentType} onClose={onClose} />}</Portal>
    </>
  );
}

export default Folder;
