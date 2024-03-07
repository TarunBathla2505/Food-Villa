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
      <div className="  min-h-96 max-h-96 w-56 rounded-md border-2 hover:bg-orange-200 ">
        <img
          src={ImgCdnURL + cloudinaryImageId}
          className=" min-h-56 max-h-56 rounded-md min-w-52 max-w-52 pl-3 pt-3 mb-5"
        />
        <p className=" pl-3 w-full text-nowrap truncate hover:text-clip font-bold text-lg">
          {name}
        </p>
        <p className=" pl-3 w-full text-nowrap truncate hover:text-clip ">
          {cuisines.join(", ")}
        </p>
        <p className="pl-3">⭐️ {avgRating}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
