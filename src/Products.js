import styles from "./index.module.css";

function Products(prom) {
  return (
    <div className={styles.box}>
      <div className={styles.imgP}>
        <img src={prom.src} className={styles.productImg}></img>
      </div>

      <h3>{prom.price}</h3>
      <h1>{prom.name}</h1>
      <h1 className={styles.button}>Купить</h1>
    </div>
  );
}

export default Products;
