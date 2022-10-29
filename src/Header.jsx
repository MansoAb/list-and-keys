import styles from "./index.module.css";
import logo from "./imgs/bag.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Intocode Coding Shopcamp</h1>
      <img src={logo} className={styles.logo}></img>
    </div>
  );
};

export default Header;
