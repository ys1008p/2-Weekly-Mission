import styles from './CommonModal.module.css';

function CommonModal({
  title,
  subTitle,
  content,
  buttonText,
  buttonStyle,
  onClick,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
        {subTitle && <span className={styles.subtitle}>{subTitle}</span>}
      </div>
      <div className={styles.contentContainer}>
        {content}
        {buttonText && (
          <button
            className={`cta ${styles.button} ${buttonStyle}`}
            onClick={onClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default CommonModal;
