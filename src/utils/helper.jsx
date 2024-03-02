export const filterData = (searchText, restaurantData) => {
  const data = restaurantData.filter((rest) => {
    return rest?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
  });
  return data;
};
