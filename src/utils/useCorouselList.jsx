import { useEffect, useState } from "react";
import { RestaurentListUrl } from "../constant";

const useCorouselList = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    restaurentInfo();
  }, []);
  async function restaurentInfo() {
    const data = await fetch(RestaurentListUrl);

    const json = await data.json();
    setInfo(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }
  return info;
};



export default useCorouselList;
