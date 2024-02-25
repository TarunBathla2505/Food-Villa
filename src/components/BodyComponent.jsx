import RestaurantCard from "./RestaurentCard";
import styles from "./BodyComponent.module.css";
import { restaurentList } from "../constant";
import { useState } from "react";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("Search");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="button" className="Search-btn">
          Search Button
        </button>
      </div>
      <div className={styles["restaurent-list"]}>
        {restaurentList.map((restaurent) => {
          return (
            <RestaurantCard {...restaurent.info} key={restaurent.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
