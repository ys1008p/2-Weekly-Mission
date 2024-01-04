export type Folder = {
	id: number;
	created_at: string;
	name: string;
	user_id: number;
	favorite: boolean;
	link: {
		count: number;
	};
};

export type CurrentFolder = Pick<Folder, "id" | "name">;

export type Link = {
	id: number;
	created_at: string;
	updated_at: string;
	url: string;
	title: string;
	description: string;
	image_source: string;
	folder_id: number;
};
