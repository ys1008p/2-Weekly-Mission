import Layout from "@/components/common/Layout";
import FolderOwner from "@/components/shared/FolderOwner";
import GNB from "../common/GNB";
import { PropsWithChildren } from "react";
import { Folder } from "@/types/shared-type";

interface Props extends PropsWithChildren {
	folder: Folder;
}

export default function SharedLayout({ folder, children }: Props) {
	const { id, name, owner } = folder;

	return (
		<Layout
			navigationBar={<GNB />}
			heroHeader={<HeroHeader folder={{ id, name, owner }} />}
		>
			{children}
		</Layout>
	);
}

function HeroHeader({ folder }: { folder: Omit<Folder, "links" | "count"> }) {
	return (
		<div className="pb-[6rem] pt-[2rem]">
			<div className="mx-auto flex w-max flex-col items-center gap-[1rem] tablet:gap-[2rem]">
				<FolderOwner
					thumbnail={folder.owner.profileImageSource}
					name={folder.owner.name}
				/>
				<h2 className="text-center text-[3.2rem] font-semibold tablet:text-[4rem]">
					{folder.name}
				</h2>
			</div>
		</div>
	);
}
