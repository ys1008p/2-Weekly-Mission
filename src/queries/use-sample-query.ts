import { getSampleFolder } from "@/apis/sample-api";
import { Folder } from "@/types/shared-type";
import { useEffect, useState } from "react";

export const useFolderQuery = () => {
	const [folder, setFolder] = useState<Folder>({
		id: 0,
		name: "",
		owner: {
			id: 0,
			name: "",
			profileImageSource: "",
		},
		links: [],
		count: 1,
	});
	const [error, setError] = useState<Error | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchFolder = async () => {
			try {
				const { folder } = await getSampleFolder();
				setFolder(folder);
			} catch (err) {
				if (err instanceof Error) setError(err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchFolder();
	}, []);

	return { data: folder, isLoading, error };
};
