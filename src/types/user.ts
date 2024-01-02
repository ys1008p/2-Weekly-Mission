/**
 * 현재는 페이지 별 user fetch api가 상이하며 데이터 또한 다름.
 * 고육지책으로 페이지 별 유저 타입 생성.
 */
interface User {
  id: number;
  name: string;
  email: string;
}

export interface FolderUser extends User {
  created_at: string;
  image_source: string;
  auth_id: string;
}

export interface SharedUser extends User {
  profileImageSource: string;
}
