interface FolderProps {
  [key: string]: string;
}

export const END_POINT = "https://bootcamp-api.codeit.kr/api";
export const MAX_RETRY_COUNT = 3;

export const FOLDER_OPTION_NAME: FolderProps = {
  pen: "이름 변경",
  share: "공유",
  delete: "삭제",
};
