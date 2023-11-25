import LinkInfoCard from "./LinkInfoCard";

export default function LinkInfoCardList({ linkInfoList }) {
  return (
    <ul className="grid-cols-fill-max-34 grid w-full justify-center gap-x-[2rem] gap-y-[2.5rem]">
      {linkInfoList.map((linkInfo) => (
        <li key={linkInfo.id}>
          <a href={linkInfo.url}>
            <LinkInfoCard linkInfo={linkInfo} />
          </a>
        </li>
      ))}
    </ul>
  );
}
