import styles from "./Shimmer.module.css";

const Shimmer = () => {
  return (
    <div className={styles["restaurent-list"]}>
      {Array(20)
        .fill("")
        .map((item, index) => (
          <div className={styles["shimmer-card"]} key={index}></div>
        ))}
    </div>
  );
};
export default Shimmer;
