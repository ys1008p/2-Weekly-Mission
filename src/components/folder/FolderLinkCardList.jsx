import FolderLinkCard from "@/components/folder/FolderLinkCard";

export default function FolderLinkCardList({ linkInfoList }) {
  return (
    <ul className="relative grid w-full grid-cols-fill-max-34 gap-x-[2rem] gap-y-[2.5rem]">
      {linkInfoList.map((linkInfo) => (
        <li key={linkInfo.id}>
          <a href={linkInfo.url} target="_blank" className="active:bg-none">
            <FolderLinkCard linkInfo={linkInfo} />
          </a>
        </li>
      ))}
    </ul>
  );
}
