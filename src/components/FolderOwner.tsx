import style from '../styles/FolderOwner.module.css';
import { OwnerType } from '../constants/type';

const FolderOwner = ({owner, name}:{ owner:OwnerType, name:string}) => {
  return(
    <section className={`${style['owner--section']}`}>
      <div className={`${style['owner-content']}`}>
        <div className={`${style['owner-info--container']}`}>
          <img src={owner?.profileImageSource} alt="프로필 이미지" className={`${style['owner-profile-image']}`}></img>
          <p className={`${style['owner-pofile-name']}`}>@{owner?.name}</p>
        </div>
        <h1 className={`${style['bookmark-title']}`}>{name}</h1>
      </div>
    </section>
  )
};

export default FolderOwner;
