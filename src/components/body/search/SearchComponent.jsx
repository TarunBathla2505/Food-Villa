import { useState } from "react";

const SearchComponent = ({
  filterData,
  restaurantData,
  setFilteredRestaurantData,
}) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex px-3 py-3 justify-center min-h-16">
      <input
        type="text"
        className=" border-2 border-black w-1/2 rounded-md mr-3"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        type="button"
        className=" bg-black text-white rounded-md w-20"
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
