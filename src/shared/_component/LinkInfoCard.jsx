import { formatCreatedAtInCard, formatPastInCard } from "/src/shared/util";
import Card from "/src/_component/common/Card";

export default function LinkInfoCard({ linkInfo }) {
  return (
    <Card className="relative h-[33.4rem] w-[34rem] origin-center transform-gpu overflow-hidden rounded-[1.5rem] bg-u-white shadow-[0px_5px_25px_0px_rgba(0,0,0,0.08)] transition-transform will-change-transform hover:z-10 hover:scale-[1.3]">
      <Card.Thumbnail
        src={
          linkInfo.imageSource ??
          "https://res.cloudinary.com/divjslgco/image/upload/v1700841157/codeit/images/link-sample-thumbnail.jpg"
        }
        className="h-[19.2rem] w-full object-cover"
      />
      <div className="flex flex-col gap-[1rem] px-[2rem] py-[1.5rem]">
        <div className="w-full text-[1.3rem] text-[#666]">
          {formatPastInCard(linkInfo.createdAt)}
        </div>
        <Card.Description
          description={linkInfo.description}
          className="line-clamp-2 w-full text-ellipsis text-[1.6rem]"
        />
        <div className="line-clamp-1 w-full text-ellipsis text-[1.4rem] text-[#333]">
          {formatCreatedAtInCard(linkInfo.createdAt)}
        </div>
      </div>
    </Card>
  );
}
