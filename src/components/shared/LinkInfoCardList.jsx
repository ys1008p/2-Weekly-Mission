import LinkInfoCard from "@/components/shared/LinkInfoCard";

export default function LinkInfoCardList({ linkInfoList }) {
  return (
    <ul className="relative grid w-full grid-cols-fill-max-34 justify-center gap-x-[2rem] gap-y-[2.5rem]">
      {linkInfoList.map((linkInfo) => (
        <li key={linkInfo.id}>
          <a href={linkInfo.url} target="_blank">
            <LinkInfoCard linkInfo={linkInfo} />
          </a>
        </li>
      ))}
    </ul>
  );
}
