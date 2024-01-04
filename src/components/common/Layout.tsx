import { PATH_FAQ, PATH_PRIVACY } from "@/constants/routes";
import Icon from "./Icon";
import { PropsWithChildren, ReactNode } from "react";

export interface LayoutProps extends PropsWithChildren {
	navigationBar: ReactNode;
	heroHeader: ReactNode;
}
export default function Layout({
	navigationBar,
	heroHeader,
	children,
}: LayoutProps) {
	return (
		<>
			<GlobalHeader navigationBar={navigationBar} heroHeader={heroHeader} />
			{children}
			<GlobalFooter />
		</>
	);
}

interface HeaderProps {
	navigationBar: ReactNode;
	heroHeader: ReactNode;
}
export function GlobalHeader({ navigationBar, heroHeader }: HeaderProps) {
	return (
		<header className="flex w-full flex-col items-center bg-u-skyblue">
			{navigationBar}
			{heroHeader}
		</header>
	);
}

export function GlobalFooter() {
	return (
		<footer className="flex h-[16rem] w-full justify-center bg-u-black p-[3.2rem]">
			<div className="flex h-full w-full max-w-[192rem] justify-between tablet:h-fit tablet:px-[10.4rem]">
				<div className="flex flex-col-reverse justify-between tablet:contents">
					<span className="text-[1.6rem] text-[#676767]">©codeit - 2023</span>
					<div className="flex gap-x-[3rem] text-[1.6rem] text-[#cfcfcf]">
						<a href={PATH_PRIVACY}>Privacy Policy</a>
						<a href={PATH_FAQ}>FAQ</a>
					</div>
				</div>
				<div className="flex h-[2rem] gap-x-[1.2rem]">
					<a
						href="https://www.facebook.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon name="facebook" />
					</a>
					<a
						href="https://twitter.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon name="twitter" />
					</a>
					<a
						href="https://www.youtube.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon name="youtube" />
					</a>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon name="instagram" />
					</a>
				</div>
			</div>
		</footer>
	);
}
