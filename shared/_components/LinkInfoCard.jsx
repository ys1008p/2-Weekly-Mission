import Card from "./Card";

export default function LinkInfoCard({ linkInfo }) {
  return (
    <Card className="overflow-hidden rounded-[1.5rem] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.08)]">
      <Card.Thumbnail src={linkInfo.thumbnail} />
      <div className="flex flex-col gap-[1rem] px-[2rem] py-[1.5rem]">
        <div className="w-full text-[1.3rem] text-[#666]">{linkInfo.time}</div>
        <Card.Description
          description={linkInfo.description}
          className="line-clamp-2 w-full text-ellipsis text-[1.6rem]"
        />
        <div className="line-clamp-1 w-full text-ellipsis text-[1.4rem] text-[#333]">
          {linkInfo.date}
        </div>
      </div>
    </Card>
  );
}
