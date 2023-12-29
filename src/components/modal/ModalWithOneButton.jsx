import styles from './ModalWithOneButton.module.css';

function ModalWithOneButton({
  title,
  subTitle,
  children,
  onClick,
  buttonText,
  buttonColor,
}) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {subTitle && <span>{subTitle}</span>}
      <div className={styles.innerContainer}>
        {children}
        <button className={`cta ${styles.button}`} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithOneButton;
