import Icon from "@/components/common/Icon";
import { ChangeEvent } from "react";

interface Props {
	onChangeSearchInput?: (userInput: string) => void;
	onResetSearchInput?: () => void;
}

export default function SearchBar({
	onChangeSearchInput = () => {},
	onResetSearchInput = () => {},
}: Props) {
	const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		onChangeSearchInput(e.target.value);
	};

	const handleClickResetButton = () => {
		onResetSearchInput();
	};

	return (
		<div className="flex w-full items-center gap-[1rem] rounded-[1rem] bg-[#f5f5f5] p-[1.5rem]">
			<Icon name="search" className="p-[0.4rem]" />
			<input
				className="w-full bg-inherit text-[1.6rem] text-[#666] outline-none placeholder:text-[#666]"
				placeholder="링크를 검색해 보세요."
				onChange={handleChangeSearchInput}
			/>
			<button
				type="button"
				onClick={handleClickResetButton}
				className="flex justify-center items-center"
			>
				<Icon name="close" className="w-[2.4rem] h-[2.4rem]" />
			</button>
		</div>
	);
}
