import dayjs from "dayjs";
import relativeTime from "/src/_util/customDayJSRelativeTime";

dayjs.extend(relativeTime);

export const formatPastInCard = (past) => {
  return dayjs(past).fromNow();
};

export const formatCreatedAtInCard = (createdAt) => {
  return dayjs(createdAt).format("YYYY.M.D");
};
