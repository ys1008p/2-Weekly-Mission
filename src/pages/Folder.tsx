import { useEffect, useRef, useState } from "react";
import PageLayout from "./PageLayout";
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
  const [isInterSecting, setIsIntersecting] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const pageEndRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const target = ref.current;
    const endTarget = pageEndRef.current;
    if (!target || !endTarget) return;

    let isTargetIntersecting = false;
    let isEndTargetIntersecting = false;

    const handler: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === target) {
          isTargetIntersecting = entry.isIntersecting;
        } else if (entry.target === endTarget) {
          isEndTargetIntersecting = entry.isIntersecting;
        }
      });

      // 조건에 따라 isIntersecting 상태 업데이트
      const shouldBeIntersecting =
        (isTargetIntersecting && isEndTargetIntersecting) ||
        isTargetIntersecting ||
        (!isTargetIntersecting && isEndTargetIntersecting);
      setIsIntersecting(shouldBeIntersecting);
    };

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handler, options);

    observer.observe(target);
    observer.observe(endTarget);

    return () => {
      observer.unobserve(target);
      observer.unobserve(endTarget);
    };
  }, []);

  return (
    <>
      <FolderInfo ref={ref} isInterSecting={isInterSecting} />
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
      <div id="end" ref={pageEndRef} />
      <Portal>{onModal && <Modal currentType={currentType} onClose={onClose} />}</Portal>
    </>
  );
}

export default Folder;
