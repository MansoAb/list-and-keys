import styles from "./index.module.css";
import Product from "./Product";
import macbook from "./imgs/macbook.png";
import iphone from "./imgs/iphone.jpg";
import scooter from "./imgs/scooter.png";
import watch from "./imgs/watch.jpg";
import samsung from "./imgs/monitor.jpeg";
import airpods from "./imgs/airpods.png";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.product}>
        <h1>Гаджеты и аксессуары</h1>
        <h1 className={styles.textBord}>Бытовая техника</h1>
        <h1 className={styles.textBord}>Прочее</h1>
      </div>
      <div className={styles.productsPrice}>
        <Product name="Macbook" src={macbook} price="76000" />
        <Product name="Iphone" src={iphone} price="50000" />
        <Product name="apple watch" src={watch} price="22500" />
        <Product name="Scooter" src={scooter} price="25000" />
        <Product name="AirPods 2" src={airpods} price="12000" />
        <Product name="Samsung" src={samsung} price="37000" />
      </div>
    </div>
  );
};

export default Main;
