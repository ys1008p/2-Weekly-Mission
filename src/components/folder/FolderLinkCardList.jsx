import LinkInfoCard from "@/components/folder/FolderLinkCard";

export default function LinkInfoCardList({ linkInfoList }) {
  return (
    <ul className="relative grid w-full grid-cols-fill-max-34 gap-x-[2rem] gap-y-[2.5rem]">
      {linkInfoList.map((linkInfo) => (
        <li key={linkInfo.id}>
          <a href={linkInfo.url} target="_blank" className="active:bg-none">
            <LinkInfoCard linkInfo={linkInfo} />
          </a>
        </li>
      ))}
    </ul>
  );
}
