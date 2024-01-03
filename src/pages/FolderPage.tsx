import Icon from "@/components/common/Icon";
import SearchBar from "@/components/common/SearchBar";
import FolderFAB from "@/components/folder/FolderFAB";
import FolderLayout from "@/components/folder/FolderLayout";
import FolderLinkCardList from "@/components/folder/FolderLinkCardList";
import FolderTabMenuList from "@/components/folder/FolderTabMenuList";
import { useUser } from "@/hooks/use-user";
import { useFolderListQuery } from "@/queries/use-folder-query";
import { useLinkListQuery } from "@/queries/use-link-query";
import { useUserQuery } from "@/queries/use-user-query";
import { CurrentFolder } from "@/types/folder-type";
import { useMemo, useState } from "react";

export default function FolderPage() {
	// userId는 도대체 어디서 받아오죠...
	useUserQuery(1);
	const user = useUser();
	const { folderList } = useFolderListQuery(user.id);
	const [currentFolder, setCurrentFolder] = useState<CurrentFolder>({
		id: 0,
		name: "전체",
	});
	const { linkList, refetch } = useLinkListQuery(user.id, currentFolder.id);
	const [searchValue, setSearchValue] = useState("");

	const handleChangeSearchInput = (userInput: string) => {
		refetch(user.id, currentFolder.id);
		setSearchValue(userInput);
	};

	const searchedLinkList = useMemo(
		() =>
			linkList.filter(({ url, title, description }) =>
				[url, title, description].some((t) => t.match(searchValue)),
			),
		[linkList, searchValue],
	);

	console.log(searchedLinkList);

	return (
		<FolderLayout>
			<main className="flex flex-[1] flex-col items-center gap-[3.2rem] px-[3.2rem] py-[2rem] tablet:gap-[4rem] tablet:py-[4rem]">
				<section className="w-full max-w-[106rem]">
					<SearchBar onChangeSearchInput={handleChangeSearchInput} />
				</section>
				<section className="flex w-full max-w-[106rem] flex-[1] flex-col gap-[2.4rem]">
					<FolderTabMenuList
						folderList={folderList}
						onClickTabMenuItem={(folder: CurrentFolder) =>
							setCurrentFolder(folder)
						}
						currentFolder={currentFolder}
					/>
					<header className="w-full flex-col justify-between gap-[1.2rem] tablet:flex tablet:flex-row">
						<h2 className="text-[2.4rem] font-semibold">
							{currentFolder.name}
						</h2>
						{currentFolder.id ? (
							<div className="flex gap-[1.2rem] text-[1.4rem] text-u-gray-60">
								<button
									type="button"
									className="flex items-center gap-[0.4rem]"
								>
									<Icon name="share" className="h-[1.8rem] w-[1.8rem]" />
									공유
								</button>
								<button
									type="button"
									className="flex items-center gap-[0.4rem]"
								>
									<Icon name="pen" className="h-[1.8rem] w-[1.8rem]" />
									이름 변경
								</button>
								<button
									type="button"
									className="flex items-center gap-[0.4rem]"
								>
									<Icon name="trash" className="h-[1.8rem] w-[1.8rem]" />
									삭제
								</button>
							</div>
						) : null}
					</header>
					{searchedLinkList.length ? (
						<FolderLinkCardList linkInfoList={searchedLinkList} />
					) : (
						<div className="flex flex-[1] items-center justify-center text-[1.6rem]">
							저장된 링크가 없습니다.
						</div>
					)}
				</section>
				<FolderFAB />
			</main>
		</FolderLayout>
	);
}
