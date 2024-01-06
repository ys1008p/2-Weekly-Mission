export interface LinkType {
  id:number;
  url: string,
  createdAt?: string | number | Date,
  'created_at'?:string,
  imageSource?:string,
  'image_source'?:string,
  description:string
}

export interface OwnerType {
  profileImageSource: string;
  name:string;
}

export interface FolderType {
  id:number;
  name:string;
  owner?:OwnerType;
  links?:LinkType[];
}

export interface SharedFolderType {
  id:number;
  name:string;
  owner:OwnerType;
  links:LinkType[];
}

export interface UserType {
  email:string;
  id:number;
  name:string;
  profileImageSource?:string;
  'image_source'?:string;
}
