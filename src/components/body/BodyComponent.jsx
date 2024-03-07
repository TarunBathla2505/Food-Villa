import RestaurantCard from "./Restaurents/card/RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "../shimmer/Shimmer";
import SearchComponent from "./search/SearchComponent";
import CorouselComponent from "./Corousal/CorouselComponent";
import { filterData } from "../../utils/helper";
import useRestaurentList from "../../utils/useRestaurentList";
import useCorouselList from "../../utils/useCorouselList";
import useOnline from "../../utils/useOnline";

const BodyComponent = () => {
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const restaurantData = useRestaurentList();
  const corouselRestaurentData = useCorouselList();

  useEffect(() => {
    setFilteredRestaurantData(restaurantData);
  }, [restaurantData]);

  const online = useOnline();
  if (!online) {
    return <h1>Offline please check your internet connection</h1>;
  }
  return restaurantData?.length === 0 ? (
    <>
      <CorouselComponent corouselRestaurentData={corouselRestaurentData} />
      <SearchComponent
        filterData={filterData}
        restaurantData={restaurantData}
        setFilteredRestaurantData={setFilteredRestaurantData}
      />
      <Shimmer />
    </>
  ) : (
    <>
      <CorouselComponent corouselRestaurentData={corouselRestaurentData} />
      <SearchComponent
        filterData={filterData}
        restaurantData={restaurantData}
        setFilteredRestaurantData={setFilteredRestaurantData}
      />
      {filteredRestaurantData?.length === 0 ? (
        <h1>No Restaurent matched your filter ....</h1>
      ) : (
        <div className="flex flex-wrap gap-3 pl-3 drop-shadow-2xl">
          {filteredRestaurantData.map((restaurent) => {
            return (
              <RestaurantCard {...restaurent.info} key={restaurent.info.id} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default BodyComponent;
