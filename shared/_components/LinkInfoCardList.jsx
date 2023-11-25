import LinkInfoCard from "./LinkInfoCard";

export default function LinkInfoCardList({ linkInfoList }) {
  const linkInfoMock = {
    id: 1,
    thumbnail:
      "https://res.cloudinary.com/divjslgco/image/upload/v1700841157/codeit/images/link-sample-thumbnail.jpg",
    time: "10 minutes ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat",
    date: "2023.3.15",
  };

  return (
    <div className="grid-cols-fill-max-34 grid w-full justify-center gap-x-[2rem] gap-y-[2.5rem]">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((linkInfo) => (
        <a href={""}>
          <LinkInfoCard linkInfo={linkInfoMock} />
        </a>
      ))}
    </div>
  );
}
