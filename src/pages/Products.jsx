import React, { useEffect, useState } from "react";
import "./Products.css";
import data from "../AllProductsData";
import { Link, NavLink } from "react-router-dom";
import Pagination from "./Pagination";
import Search from "../Components/Search";
import { LiaRupeeSignSolid } from "react-icons/lia";

function Products() {
  // State to hold filtered data
  const [filteredData, setFilteredData] = useState(data);

  // Define state for the range filter value
  const [rangeFilterValue, setRangeFilterValue] = useState(500);

  // Define state for the check box
  const [isFreeShippingChecked, setIsFreeShippingChecked] = useState(false);

  // Define state for the Search text box
  const [searchText, setSearchText] = useState("");

  // Define state for Category text box
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Define state for Company text box
  const [selectCompany, setSelectCompany] = useState("All");

  //Define state for sort text box
  const [selectSortBy, setSelectSortBy] = useState("a-z");

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPost = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate fetching data with a delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after delay (simulating data fetch)
    }, 2000);

    // Clean up timer on component unmount or re-render
    return () => clearTimeout(timer);
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Update the range filter value when the input changes
  const handleRangeFilterValue = (event) => {
    setRangeFilterValue(parseInt(event.target.value));
  };

  // Update the check box change
  const handleCheckBoxChange = (event) => {
    setIsFreeShippingChecked((prevState) => !prevState);
  };

  // Function to handle text change in the search box
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  //Function to handle change in the category field
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //Function to handle change in the Company filed
  const handleCompanyNameChange = (e) => {
    setSelectCompany(e.target.value);
  };

  //Function to handle change in the sort-by field
  const handleSortByChange = (e) => {
    setSelectSortBy(e.target.value);
  };

  //Function to handle Reset functionality
  const handleReset = () => {
    setRangeFilterValue(500);
    setIsFreeShippingChecked(false);
    setSearchText("");
    setSelectedCategory("All");
    setSelectCompany("All");
    setSelectSortBy("a-z");
  };

  const handleSearch = () => {
    // Capture the filtered data returned from Search.jsx
    const filteredData = Search({
      searchText,
      selectedCategory,
      selectCompany,
      selectSortBy,
      rangeFilterValue,
      isFreeShippingChecked,
    });
    setFilteredData(filteredData);
  };

  return (
    <section className="">
      <div className="row  mt-5 mx-auto">
        <div
          className="col-md-10 d-flex dColumn rounded-5 mx-auto"
          style={{ height: "300px", width: "900px" }}
        >
          <div className="col-md-2 mt-5 ms-5 mx-3">
            <div>
              <p>Search Product</p>
              <input
                className="form-control rounded-3"
                value={searchText}
                type="search"
                onChange={handleSearchTextChange}
              />
              {searchText && ( // Conditionally render the clear button
                <i className="bi bi-x"></i>
              )}
            </div>
            <div className="mt-5">
              <div className="d-flex justify-content-between">
                <label for="customRange2" class="form-label">
                  Select Price
                </label>
                <span>
                  <LiaRupeeSignSolid />
                  {rangeFilterValue}
                </span>
              </div>
              <input
                type="range"
                class="form-range"
                min="0"
                max="5000"
                value={rangeFilterValue}
                step="100"
                id="customRange2"
                onChange={handleRangeFilterValue}
              ></input>

              <div className="d-flex justify-content-between">
                <div class=" caption">
                  <strong className="custom-font">0</strong>
                  <span id="slider-range-value1"></span>
                </div>
                <div class=" text-right caption">
                  <strong className="custom-font">
                    Max: <LiaRupeeSignSolid />
                    5000
                  </strong>
                  <span id="slider-range-value2"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 ms-5 custom-position mx-3">
            <div className=" c-class ">
              <p> Select Category</p>
              <select
                className="form-select rounded-3"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="All">All</option>
                <option value="Chairs">Chairs</option>
                <option value="Tables">Tables</option>
                <option value="Sofas">Sofa</option>
                <option value="Kids">Kids</option>
                <option value="Beds">Beds</option>
              </select>
            </div>
            <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
              <span> Free Shipping</span>
              <input
                class="form-check-input"
                onChange={handleCheckBoxChange}
                type="checkbox"
                checked={isFreeShippingChecked}
              />
            </div>
          </div>
          <div className="col-md-2 ms-5 custom-position mx-3">
            <div className="c-class">
              <p> Select Company</p>
              <select
                className="form-select rounded-3"
                value={selectCompany}
                onChange={handleCompanyNameChange}
              >
                <option value="All">All</option>
                <option value="Modenza">Modenza</option>
                <option value="Luxora">Luxora</option>
                <option value="Artifex">Artifex</option>
                <option value="Comfora">Comfora</option>
                <option value="Homestead">Homestead</option>
              </select>
              <div
                className="btn block-btn d-grid mt-5 text-white"
                style={{ backgroundColor: "#4a94f5" }}
                onClick={handleSearch}
              >
                Search
              </div>
            </div>
          </div>
          <div className="col-md-2 ms-5 custom-position mx-3">
            <div className="c-class">
              <p> Sort By</p>
              <select
                className="form-select rounded-3"
                value={selectSortBy}
                onChange={handleSortByChange}
              >
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
              <div
                className="btn block-btn d-grid mt-5 text-white"
                style={{ backgroundColor: "#c149ad" }}
                onClick={handleReset}
              >
                Reset
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-5">
        <div className="row mx-auto">
          {currentPost.map((item, index) => (
            <div className="col-md-4 mt-5 " key={index}>
              <>
                <Link
                  to={`/products/${item.id}`}
                  state={{ data: item }}
                  style={{ textDecoration: "none" }}
                >
                  <div key={index} className="card custom-card h-100">
                    {
                      <img
                        src={item.attributes.image}
                        className="card-img-top img-fluid rounded-3 ms-5 mt-3"
                        alt=""
                        style={{
                          objectFit: "cover",
                          height: "200px",
                          width: "300px",
                        }}
                      />
                    }
                    <div className="card-body d-flex flex-column justify-content-center shadow-sm">
                      <h5 className="card-title text-center">
                        {item.attributes.title}
                      </h5>
                      <p className="card-text text-center">
                        <span>
                          <LiaRupeeSignSolid />
                        </span>
                        {item.attributes.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </>
            </div>
          ))}
        </div>
      </section>
      <Pagination
        postPerPage={postPerPage}
        totalPost={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
}

export default Products;
