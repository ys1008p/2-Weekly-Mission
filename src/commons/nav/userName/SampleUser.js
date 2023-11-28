import styles from "../Nav.module.css";

export default function SampleUser({ children }) {
  return (
    <>
      <span className={styles.userId}>{children}</span>
    </>
  );
}
