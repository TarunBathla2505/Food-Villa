import { useState } from "react";
import styles from "./SearchComponent.module.css";

const SearchComponent = ({
  filterData,
  restaurantData,
  setFilteredRestaurantData,
}) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className={styles["search-container"]}>
      <input
        type="text"
        className={styles["search-input"]}
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        type="button"
        className={styles["search-btn"]}
        onClick={() => {
          const data = filterData(searchText, restaurantData);
          setFilteredRestaurantData(data);
        }}
      >
        Search
      </button>
    </div>
  );
};
export default SearchComponent;
