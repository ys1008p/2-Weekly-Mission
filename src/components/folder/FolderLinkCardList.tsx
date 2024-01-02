import FolderLinkCard from "@/components/folder/FolderLinkCard";
import { Link } from "@/types/folder-type";

interface Props {
	linkInfoList: Link[];
}

export default function FolderLinkCardList({ linkInfoList }: Props) {
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
						<FolderLinkCard linkInfo={linkInfo} />
					</a>
				</li>
			))}
		</ul>
	);
}
