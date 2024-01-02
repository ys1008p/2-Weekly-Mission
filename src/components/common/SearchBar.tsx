import Icon from "@/components/common/Icon";

export default function SearchBar() {
	return (
		<div className="flex w-full items-center gap-[1rem] rounded-[1rem] bg-[#f5f5f5] p-[1.5rem]">
			<Icon name="search" className="p-[0.4rem]" />
			<input
				className="w-full bg-inherit text-[1.6rem] text-[#666] outline-none placeholder:text-[#666]"
				placeholder="링크를 검색해 보세요."
			/>
		</div>
	);
}
