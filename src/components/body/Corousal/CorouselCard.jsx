import styles from "./CorouselCard.module.css";

const CorouselCard = ({ restaurent }) => {
  const url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
  const imageId = restaurent.imageId;
  console.log(imageId);
  return (
    <div className={styles.card}>
      <img src={url + imageId} alt="img" />
    </div>
  );
};

export default CorouselCard;
