import styles from "./index.module.css";

function Product(prom) {
  return (
    <div className={styles.box}>
      <div className={styles.imgP}>
        <img src={prom.src} className={styles.productImg}></img>
      </div>

      <p>{prom.price}</p>
      <h1>{prom.name}</h1>
      <h1 className={styles.button}>Купить</h1>
    </div>
  );
}

export default Product;
