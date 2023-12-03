import Card from "@/components/common/Card";
import {
  formatCreatedAtInCard,
  formatPastInCard,
} from "@/utils/folder/folder-util";

export default function SharedLinkCard({ linkInfo }) {
  return (
    <Card className="relative h-full w-full rounded-[1.5rem] bg-u-white shadow-[0px_5px_25px_0px_rgba(0,0,0,0.08)] tablet:w-[34rem]">
      <div className="relative h-[19.2rem] w-full overflow-hidden rounded-t-[1.5rem]">
        <Card.Thumbnail
          src={
            linkInfo.imageSource ??
            "https://res.cloudinary.com/divjslgco/image/upload/v1700841157/codeit/images/link-sample-thumbnail.jpg"
          }
          className="h-full w-full origin-center transform-gpu object-cover transition-transform will-change-transform hover:scale-[1.3]"
        />
      </div>
      <div className="flex flex-col gap-[1rem] px-[2rem] py-[1.5rem]">
        <div className="flex w-full items-center justify-between text-[1.3rem] text-[#666]">
          {formatPastInCard(linkInfo.createdAt)}
        </div>
        <Card.Description
          description={linkInfo.description}
          className="line-clamp-2 h-[4.9rem] w-full text-ellipsis text-[1.6rem]"
        />
        <div className="line-clamp-1 w-full text-ellipsis text-[1.4rem] text-[#333]">
          {formatCreatedAtInCard(linkInfo.createdAt)}
        </div>
      </div>
    </Card>
  );
}
