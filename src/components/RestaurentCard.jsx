import styles from "./RestaurantCard.module.css";
import { ImgCdnURL } from "../constant";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className={styles.card}>
      <img src={ImgCdnURL + cloudinaryImageId} />
      <p className={styles.name}>{name}</p>
      <p className={styles.cuisine}>{cuisines.join(", ")}</p>
      <p className={styles.rating}>⭐️ {avgRating}</p>
    </div>
  );
};

export default RestaurantCard;
