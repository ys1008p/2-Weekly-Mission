export interface Link {
  id: number;
  url: string;
  title: string;
  description: string;
  imageSource: string;
  createdAt: string;
}

export interface FolderData {
  id: number;
  name: string;
}

export interface LinkData {
  id: number;
  folder_id: number;
  url: string;
  title: string;
  description: string;
  image_source: string;
  created_at: string;
  update_at: string;
}

export interface UserData {
  id: number;
  auth_id: string;
  name: string;
  email: string;
  image_source: string;
  created_at: string;
}

export interface FolderData {
  id: number;
  user_id: number;
  name: string;
  link: {
    count: number;
  };
  created_at: string;
}

export interface ShardLink {
  id: number;
  url: string;
  title: string;
  description: string;
  imageSource: string;
  createdAt: string;
}

export interface ShardData {
  id: number;
  name: string;
  owner: {
    id: number;
    name?: string;
    profileImageSource?: string;
  };
  links: ShardLink[];
}
