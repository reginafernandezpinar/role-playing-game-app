import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <p>Loading...</p>
      <img src="/logo.png" className={styles.logo} alt="logo" />
    </div>
  );
};

export default Loading;
