import styles from "./index.module.css";

function Product(prom) {
  return (
    <div className={styles.box}>
      <div className={styles.imgP}>
        <img src={prom.src} className={styles.productImg}></img>
      </div>

      <h1>{prom.price}</h1>
      <p>{prom.name}</p>
      <h1 className={styles.button}>Купить</h1>
    </div>
  );
}

export default Product;
