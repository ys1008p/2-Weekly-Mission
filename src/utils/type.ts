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

const shardLink = {
  id: 1,
  createdAt: "2023-03-12T14:24:08Z",
  url: "https://www.codeit.kr",
  title: "코드잇 | 코딩, 쉬워질 때도 됐다",
  description: "월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!",
  imageSource: "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png",
};

export type FolderLink = typeof link;
export type ShardLink = typeof shardLink;

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

export interface FolderData {
  id: number;
  user_id: number;
  name: string;
  link: {
    count: number;
  };
  created_at: string;
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
