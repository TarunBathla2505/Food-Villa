import styles from "./RestaurantCard.module.css";
import { ImgCdnURL } from "../constant";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className={styles.card}>
      <img src={ImgCdnURL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
export default RestaurantCard;
