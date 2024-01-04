export type Link = {
	id: number;
	createdAt: string;
	url: string;
	title: string;
	description: string;
	imageSource: string;
};

export type Folder = {
	id: number;
	name: string;
	owner: {
		id: number;
		name: string;
		profileImageSource: string;
	};
	links: Link[];
	count: number;
};
