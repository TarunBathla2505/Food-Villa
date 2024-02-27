import RestaurantCard from "./RestaurentCard";
import styles from "./BodyComponent.module.css";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import SearchComponent from "./SearchComponent";
import CorouselComponent from "./CorouselComponent";

const filterData = (searchText, restaurantData) => {
  const data = restaurantData.filter((rest) => {
    return rest?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
  });
  return data;
};

const BodyComponent = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [corouselRestaurentData, setCorouselRestaurentData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  useEffect(
    () => {
      //call back function :-  this function will be called not immediately but will be called whenever useEffect wants. i.e when our page is render all the code will be executed and after that this function is called. component render either my state changes or my propes changes
      getRestaurants();
    },
    [
      //this is a dependency array if we dont want our useEffect to run evry rerender we pass a depencency array and we want it to be called only some state change we pass that state in array.
      //searchText, //now this useEffect is dependent on searchText.
    ]
  );
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCorouselRestaurentData(
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info
    );
  }

  return restaurantData?.length === 0 ? (
    <Shimmer />
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
        <div className={styles["restaurent-list"]}>
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
