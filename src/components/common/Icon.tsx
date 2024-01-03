import { useIconQuery } from "@/queries/use-icon-query";
import { ComponentPropsWithoutRef } from "react";

const ICON_MATCHER = {
	smile: "smile",
	facebook: "facebook",
	twitter: "twitter",
	youtube: "youtube",
	instagram: "instagram",
	search: "searchbar",
	logo: "logo",
	profile: "profile",
	link: "link",
	pen: "pen",
	trash: "trash",
	share: "share",
	star: "star",
	kebab: "kebab-more",
	add: "add",
	close: "close",
};

interface Props extends ComponentPropsWithoutRef<"span"> {
	name: keyof typeof ICON_MATCHER;
}

export default function Icon({ name, ...props }: Props) {
	const icon = useIconQuery(ICON_MATCHER[name]);

	// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
	return <span dangerouslySetInnerHTML={{ __html: icon }} {...props} />;
}
