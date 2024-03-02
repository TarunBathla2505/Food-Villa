import { useEffect, useState } from "react";
import { RestaurentListUrl } from "../constant";

const useRestaurentList = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    restaurentInfo();
  }, []);
  async function restaurentInfo() {
    const data = await fetch(RestaurentListUrl);

    const json = await data.json();
    setInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  return info;
};

export default useRestaurentList;
