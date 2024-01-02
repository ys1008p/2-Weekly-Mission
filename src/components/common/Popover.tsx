import { useClickOutside } from "@/hooks/common/use-click-outside";
import { useToggle } from "@/hooks/common/use-toggle";
import {
	ComponentPropsWithRef,
	MouseEvent,
	ReactNode,
	createContext,
	useContext,
} from "react";

export const PopoverContext = createContext(false);
export const PopoverActionContext = createContext(() => {});

interface Props {
	children: ReactNode;
}
function Popover({ children }: Props) {
	const [popped, toggle] = useToggle();

	return (
		<PopoverContext.Provider value={popped}>
			<PopoverActionContext.Provider value={toggle}>
				{children}
			</PopoverActionContext.Provider>
		</PopoverContext.Provider>
	);
}

function Trigger({
	onClick = () => {},
	children,
	...props
}: ComponentPropsWithRef<"button">) {
	const popped = useContext(PopoverContext);
	const toggle = useContext(PopoverActionContext);

	const handleTriggerClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
		toggle();
		onClick(e);
	};

	return (
		<button
			type="button"
			data-on={popped}
			onClick={handleTriggerClick}
			{...props}
		>
			{children}
		</button>
	);
}

interface BoardProps extends ComponentPropsWithRef<"div"> {
	options: {
		closeWhenClickOutside?: boolean;
	};
}
function Board({ children, options, ...props }: BoardProps) {
	const popped = useContext(PopoverContext);
	const toggle = useContext(PopoverActionContext);
	const clickOutsideTarget = useClickOutside<HTMLDivElement>(
		() => {
			toggle();
		},
		{ dispatchCondition: popped },
	);

	const { closeWhenClickOutside = false } = options;
	const boardRef = closeWhenClickOutside ? clickOutsideTarget : null;

	return popped ? (
		<div ref={boardRef} {...props}>
			{children}
		</div>
	) : null;
}

export default Object.assign(Popover, {
	Trigger,
	Board,
});
