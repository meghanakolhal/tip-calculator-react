import TipCalculator from "../components/TipCalculator/TipCalculator";
import TipHeader from "../components/TipHeader/TipHeader";
import TipFooter from "../components/TipFooter/TipFooter";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <TipHeader />
      <TipCalculator />
      <TipFooter />
    </div>
  );
};
export default Home;
