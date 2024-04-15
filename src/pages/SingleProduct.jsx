import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SingleProduct.css";
import { addItem } from "../Redux/Slices/CartSlices";
import { useDispatch } from "react-redux";

function SingleProduct() {
  const location = useLocation();
  const productData = location.state?.data;
  const dispatch = useDispatch();
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const QuantitySelect = () => {
    const options = Array.from({ length: 10 }).map((_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));
    return options;
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-6">
          <img
            src={productData.attributes.image}
            alt=""
            className="mt-5 rounded-5 ms-5 shadow"
            style={{
              objectFit: "cover",
              height: "400px",
              width: "550px",
            }}
          />
        </div>
        <div className="col-md-6 mt-5">
          <h2 className="fw-bold">{productData.attributes.title}</h2>
          <h5 className="fw-bold text-black-50 mt-3">
            {productData.attributes.company}
          </h5>
          <p className="mt-3">
            <span>$</span>
            {productData.attributes.price}
          </p>
          <p className="lead fs-6 fw-light lh-lg">
            {productData.attributes.description}
          </p>
          <div>
            <p className="fw-bold"> Colors</p>
            <div className="d-flex">
              {productData.attributes.colors.map((color, index) => (
                <div
                  key={index}
                  className={`dot ${
                    selectedColorIndex === index ? "selected-dot" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColorIndex(index)}
                ></div>
              ))}
            </div>
            <div>
              <p className="mt-3 fw-bold">Quantity</p>
              <select
                className="form-select w-50 rounded-3"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(e.target.value)}
              >
                <QuantitySelect />
              </select>
            </div>
            <div
              className="btn mt-4 text-white"
              style={{ backgroundColor: "#463aa1", height: "40px" }}
              onClick={(e) =>
                dispatch(
                  addItem({
                    image: productData.attributes.image,
                    companyName: productData.attributes.company,
                    price: productData.attributes.price,
                    title: productData.attributes.title,
                    color: productData.attributes.colors[selectedColorIndex],
                    quantity: selectedQuantity,
                    shipping: productData.attributes.shipping,
                    id: productData.id,
                  })
                )
              }
            >
              Add To Bag
            </div>
          </div>
        </div>
      </div>
      {/* Empty div for space */}
      <div style={{ height: "50px" }}></div>
    </section>
  );
}

export default SingleProduct;
