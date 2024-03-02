import { useEffect, useState } from "react";
import { RestaurentDetailUrl } from "../constant";

const useRestaurent = (id) => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    restaurentInfo();
  }, []);
  async function restaurentInfo() {
    const data = await fetch(RestaurentDetailUrl + id);

    const json = await data.json();
    setInfo(json?.data?.cards[0]?.card?.card?.info);
  }
  return info;
};

export default useRestaurent;
