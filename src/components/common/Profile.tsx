import { ComponentPropsWithoutRef } from "react";

function Profile({ children, ...props }: ComponentPropsWithoutRef<"div">) {
	return <div {...props}>{children}</div>;
}

function Thumbnail({ src, ...props }: ComponentPropsWithoutRef<"img">) {
	return <img {...props} src={src} alt="프로필 썸네일" />;
}

interface NameProps extends ComponentPropsWithoutRef<"span"> {
	name: string;
}
function Name({ name, ...props }: NameProps) {
	return <span {...props}>{name}</span>;
}

export default Object.assign(Profile, {
	Thumbnail,
	Name,
});
