import './Sorting.css';
import FolderButton from '../shared/FolderButton/FolderButton';

export default function Sorting() {
  return (
    <div className="Sorting">
      <div class="Sorting__container">
        <FolderButton>전체</FolderButton>
        <FolderButton>즐겨찾기</FolderButton>
        <FolderButton>코딩 팁</FolderButton>
        <FolderButton>채용 사이트</FolderButton>
        <FolderButton>유용한 글</FolderButton>
        <FolderButton>나만의 장소</FolderButton>
      </div>
    </div>
  );
}
