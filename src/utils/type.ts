export interface Link {
  id: number;
  url: string;
  title: string;
  description: string;
  imageSource: string;
  createdAt: string;
}

const link = {
  id: 211,
  description:
    "Headless, type-safe, powerful utilities for complex workflows like Data Management, Data Visualization, Charts, Tables, and UI Components.",
  url: "https://tanstack.com/",
  title: "TanStack | High Quality Open-Source Software for Web Developers",
  folderId: 16,
  imageSource: "https://tanstack.com/build/_assets/og-FA4FELIQ.png",
  createdAt: "2023-10-27T02:07:36.330744+00:00",
};

export type FolderLink = typeof link;

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
