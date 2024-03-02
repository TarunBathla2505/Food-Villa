import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImgCdnURL } from "../../../../constant";
import useRestaurent from "../../../../utils/useRestaurent";

function RestaurentDetails() {
  //used to read dynamic url params
  const { id } = useParams();

  // const [info, setInfo] = useState([]);
  const info = useRestaurent(id);

  // useEffect(() => {
  //   restaurentInfo();
  // }, []);

  //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=319054&catalog_qa=undefined&submitAction=ENTER

  // async function restaurentInfo() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=" +
  //       id +
  //       "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   setInfo(json?.data?.cards[0]?.card?.card?.info);
  // }
  const imageUrl = ImgCdnURL;
  return (
    <div>
      <h1>{info?.name}</h1>
      <img src={imageUrl + info?.cloudinaryImageId} alt="image" />
      <h3>{info?.cuisines?.join(", ")}</h3>
      <h3>{info?.areaName}</h3>
      <h3>{info?.city}</h3>
      <h3>{info?.avgRating}</h3>
      <h3>{info?.costForTwoMessage}</h3>
    </div>
  );
}

export default RestaurentDetails;
