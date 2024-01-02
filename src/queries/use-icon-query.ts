import { getIcon } from "@/apis/icon-api";
import { useEffect, useState } from "react";

export const useIconQuery = (name: string) => {
	const [icon, setIcon] = useState("");

	useEffect(() => {
		const fetchIcon = async () => {
			const icon = await getIcon(name);
			setIcon(icon);
		};

		fetchIcon();
	}, [name]);

	return icon;
};
