import { CurrentFolder, Folder } from "@/types/folder-type";

interface Props {
	folderList: Folder[];
	onClickTabMenuItem: (folder: CurrentFolder) => void;
	currentFolder: CurrentFolder;
}

export default function FolderTabMenuList({
	folderList,
	onClickTabMenuItem,
	currentFolder,
}: Props) {
	const handleFolderTabMenuClick = (folder: CurrentFolder) => {
		onClickTabMenuItem(folder);
	};

	return (
		<menu className="flex w-full flex-wrap gap-[0.8rem]">
			<li>
				<button
					type="button"
					onClick={() => handleFolderTabMenuClick({ id: 0, name: "전체" })}
					className={`flex-shrink-0 rounded-[0.5rem] border-[0.1rem] border-u-primary px-[1rem] py-[0.6rem] text-[1.6rem] ${
						currentFolder.id === 0 ? "bg-u-primary text-u-white" : ""
					} tablet:px-[1.2rem] tablet:py-[0.8rem]`}
				>
					전체
				</button>
			</li>
			{folderList.map((folder) => (
				<li key={folder.id}>
					<button
						type="button"
						onClick={() =>
							handleFolderTabMenuClick({
								id: folder.id,
								name: folder.name,
							})
						}
						className={`flex-shrink-0 rounded-[0.5rem] border-[0.1rem] border-u-primary px-[1rem] py-[0.6rem] text-[1.6rem] ${
							currentFolder.id === folder.id ? "bg-u-primary text-u-white" : ""
						} tablet:px-[1.2rem] tablet:py-[0.8rem]`}
					>
						{folder.name}
					</button>
				</li>
			))}
		</menu>
	);
}
