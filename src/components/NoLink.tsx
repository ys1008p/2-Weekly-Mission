import style from '../styles/NoLink.module.css';

const NoLink = () => {
  return(
    <section className={`${style['no-link--section']}`}>
      <div className={`${style['no-link--description']}`}>저장된 링크가 없습니다</div>
      <div className={`${style['tablet-mobile--blank']}`}></div>
    </section>
  )
};

export default NoLink;
