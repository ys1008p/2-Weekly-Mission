import SharedLinkCard from "@/components/shared/SharedLinkCard";
import { Link } from "@/types/shared-type";

interface Props {
	linkInfoList: Link[];
}

export default function SharedLinkCardList({ linkInfoList }: Props) {
	return (
		<ul className="relative grid w-full grid-cols-fill-max-34 gap-x-[2rem] gap-y-[2.5rem]">
			{linkInfoList.map((linkInfo) => (
				<li key={linkInfo.id}>
					<a
						href={linkInfo.url}
						rel="noreferrer"
						target="_blank"
						className="active:bg-none"
					>
						<SharedLinkCard linkInfo={linkInfo} />
					</a>
				</li>
			))}
		</ul>
	);
}
