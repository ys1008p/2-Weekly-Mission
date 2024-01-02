import { MouseEvent, useContext } from "react";
import Icon from "../common/Icon";
import Popover from "../common/Popover";
import { PopoverActionContext } from "../common/Popover";

interface Props {
	onClickMenuItem?: (e?: MouseEvent<HTMLButtonElement>) => void;
}
export default function CardOptionMenu({ onClickMenuItem = () => {} }: Props) {
	const optionItems = [
		{ label: "삭제하기", value: "삭제하기" },
		{ label: "폴더에 추가", value: "폴더에 추가" },
	];

	return (
		<Popover>
			<Popover.Trigger className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-[0.5rem] transition-[background] hover:bg-[rgba(0,0,0,0.05)] data-[on=true]:bg-[rgba(0,0,0,0.05)]">
				<Icon name="kebab" />
			</Popover.Trigger>
			<Popover.Board
				options={{
					closeWhenClickOutside: true,
				}}
				className="absolute bottom-[3.2rem] right-[-4rem] z-10 flex flex-col overflow-hidden rounded-[0.5rem] bg-u-white shadow-[0px_2px_8px_0px_rgba(51,50,54,0.10)]"
			>
				<CardOptionMenuContent
					optionItems={optionItems}
					onClickMenuItem={onClickMenuItem}
				/>
			</Popover.Board>
		</Popover>
	);
}

interface ContentProps {
	optionItems: { label: string; value: string | number }[];
	onClickMenuItem: (e?: MouseEvent<HTMLButtonElement>) => void;
}
function CardOptionMenuContent({ optionItems, onClickMenuItem }: ContentProps) {
	const toggle = useContext(PopoverActionContext);

	const handleCardOptionClick = (e: MouseEvent<HTMLButtonElement>) => {
		onClickMenuItem(e);
		toggle();
	};

	return (
		<menu>
			{optionItems.map((item, i) => (
				<li
					key={`${item.value}-${i}`}
					className="bg-u-white px-[1.2rem] py-[0.8rem] text-[1.4rem] transition-[background] hover:bg-u-gray-10 active:text-u-primary"
				>
					<button
						type="button"
						value={item.value ?? item.label}
						onClick={handleCardOptionClick}
					>
						{item.label}
					</button>
				</li>
			))}
		</menu>
	);
}
