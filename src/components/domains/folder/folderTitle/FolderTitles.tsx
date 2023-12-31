import CategoryBox from "./CategoryBox.tsx";

interface LinkProps {
  id: number;
  create_at: string;
  image_source: string;
  title: string;
  url: string;
}

interface FolderProps {
  id: number;
  favorite: boolean;
  name: string;
  user_id: number;
  links: LinkProps[];
}

function FoldersTitles({
  folderList,
  id,
}: {
  folderList: FolderProps[];
  id: number;
}) {
  return (
    folderList?.length > 0 &&
    folderList.map((folder) => {
      if (folder.id === id) {
        return <CategoryBox key={folder.id} folder={folder} />;
      }
      return null;
    })
  );
}

export default FoldersTitles;
