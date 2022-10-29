import Header from "./Header";
import styles from "./index.module.css";
import Main from "./Main";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
