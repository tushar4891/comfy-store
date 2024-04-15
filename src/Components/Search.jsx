import React from "react";
import data from "../AllProductsData";

const SortData = ({ sortingWay, data }) => {
  let filteredData = data;
  switch (sortingWay) {
    case "a-z":
      filteredData.sort((a, b) =>
        a.attributes.title.localeCompare(b.attributes.title)
      );
      break;
    case "z-a":
      filteredData.sort((a, b) =>
        b.attributes.title.localeCompare(a.attributes.title)
      );
      break;
    case "low":
      filteredData.sort(
        (a, b) =>
          parseFloat(a.attributes.price) - parseFloat(b.attributes.price)
      );
      break;
    case "high":
      filteredData.sort(
        (a, b) =>
          parseFloat(b.attributes.price) - parseFloat(a.attributes.price)
      );
      break;
    default:
      break;
  }
  return filteredData;
};

const Search = ({
  searchText,
  selectedCategory,
  selectCompany,
  selectSortBy,
  rangeFilterValue,
  isFreeShippingChecked,
}) => {
  let filteredData = data;

  // Filter by category if a category is selected
  if (selectedCategory !== "All") {
    filteredData = filteredData.filter(
      (item) => item.attributes.category === selectedCategory
    );
  }

  // Filter by company if a company is selected
  if (selectCompany !== "All") {
    filteredData = filteredData.filter(
      (item) => item.attributes.company === selectCompany
    );
  }

  // Perform search across relevant fields if search text is provided
  if (searchText !== "") {
    const searchQuery = searchText.toLowerCase();
    filteredData = filteredData.filter(
      (item) =>
        item.attributes.title.toLowerCase().includes(searchQuery) ||
        item.attributes.category.toLowerCase().includes(searchQuery) ||
        item.attributes.company.toLowerCase().includes(searchQuery)
    );
  }

  if (isFreeShippingChecked) {
    filteredData = filteredData.filter(
      (item) => item.attributes.shipping === true
    );
  }

  if (rangeFilterValue !== 0) {
    filteredData = filteredData.filter(
      (item) => item.attributes.price >= rangeFilterValue
    );
  }

  const filterData = SortData({ sortingWay: selectSortBy, data: filteredData });
  return filteredData;
};

export default Search;
