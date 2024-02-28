import styles from "./RestaurantCard.module.css";
import { ImgCdnURL } from "../../../../constant";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  id,
}) => {
  return (
    <Link to={"/restaurent/" + id}>
      <div className={styles.card}>
        <img src={ImgCdnURL + cloudinaryImageId} />
        <p className={styles.name}>{name}</p>
        <p className={styles.cuisine}>{cuisines.join(", ")}</p>
        <p className={styles.rating}>⭐️ {avgRating}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
