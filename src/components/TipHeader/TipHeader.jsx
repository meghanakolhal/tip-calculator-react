import styles from "./TipHeader.module.css";
const TipHeader = () => {
  return (
    <header className={styles.heading}>
      <h1 className={styles.clr}>Tip Calculator</h1>
      <p className={styles.clr}>Build in React</p>
    </header>
  );
};
export default TipHeader;
