import Cta from '@/components/Cta';
import style from './FolderHeader.module.css';

function FolderHeader() {
  return (
    <section className={`wrap ${style.header}`} aria-label='링크 추가 섹션'>
      <form>
        <div className={style.linkContainer}>
          <div className={style.icon}></div>
          <input className={style.input} type='text' placeholder='링크를 추가해 보세요' />
          <Cta className={style.cta} onClick={(e) => e.preventDefault()}>
            추가하기
          </Cta>
        </div>
      </form>
    </section>
  );
}

export default FolderHeader;
