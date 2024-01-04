import relativeTime from "@/utils/common/dayjs-plugin/dayJSRelativetime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

export const formatPastInCard = (
	past: string | number | Date | dayjs.Dayjs,
) => {
	return dayjs(past).fromNow();
};

export const formatCreatedAtInCard = (createdAt: string) => {
	return dayjs(createdAt).format("YYYY.M.D");
};

declare module "dayjs" {
	interface Dayjs {
		fromNow(): string;
	}
}
