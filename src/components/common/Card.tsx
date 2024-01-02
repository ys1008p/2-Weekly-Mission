import { ComponentPropsWithoutRef, ReactNode } from "react";

function Card({ children, ...props }: ComponentPropsWithoutRef<"div">) {
	return <div {...props}>{children}</div>;
}

function Thumbnail({ src, alt, ...props }: ComponentPropsWithoutRef<"img">) {
	return <img {...props} src={src} alt={alt} />;
}

interface TitleProps extends ComponentPropsWithoutRef<"h1" | "h2" | "h3"> {
	label: {
		content: ReactNode;
		headType: "h1" | "h2" | "h3";
	};
}
function Title({ label, ...props }: TitleProps) {
	const { content, headType: H } = label;
	return <H {...props}>{content}</H>;
}

interface DescriptionProps extends ComponentPropsWithoutRef<"p"> {
	description: ReactNode;
}
function Description({ description, ...props }: DescriptionProps) {
	return <p {...props}>{description}</p>;
}

export default Object.assign(Card, {
	Thumbnail,
	Title,
	Description,
});
