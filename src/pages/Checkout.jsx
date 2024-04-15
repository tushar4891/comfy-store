import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import "./Checkout.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Redux/Slices/CartSlices";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const items = useSelector((state) => state);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  if (!location.state) {
    return (
      <div className="mt-5" style={{ marginLeft: "80px" }}>
        <h2 className="fw-bold" style={{ letterSpacing: "3px" }}>
          Checkout List is empty
        </h2>
        <hr
          class=" border-bottom mt-3"
          style={{ width: "93%", marginTop: "-15px" }}
        />
      </div>
    );
  }
  const { subtotal, shipping, tax, totalOrder } = location.state;

  // Get the current date and time
  const currentDate = new Date().toISOString();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePlaceOrderClick = () => {
    const quantities = [];
    const prices = [];
    items.cart.forEach((item) => {
      quantities.push(item.quantity);
      prices.push(item.price);
      dispatch(removeItem(item));
    });
    navigate("/orders", {
      state: {
        name: name,
        address: address,
        quantities: quantities,
        prices: prices,
        dates: new Array(quantities.length).fill(currentDate), // Fill the dates array with the current date
      },
    });
  };
  return (
    <section>
      <div className="mt-5" style={{ marginLeft: "80px" }}>
        <h2 className="fw-bold" style={{ letterSpacing: "3px" }}>
          Place Your Order
        </h2>
        <hr
          class=" border-bottom mt-3"
          style={{ width: "93%", marginTop: "-15px" }}
        />
      </div>

      <container className="mt-5">
        <div div className="row">
          <div className="col-md-6">
            <h4 className="" style={{ marginLeft: "80px" }}>
              Shipping Information
            </h4>
            <div className="mb-3">
              <label className="form-label mt-3" style={{ marginLeft: "80px" }}>
                First Name
              </label>
              <input
                type="text"
                name="identifier"
                class="form-control rounded-5"
                style={{ marginLeft: "80px", width: "90%", height: "50px" }}
                value={name}
                onChange={handleNameChange}
              ></input>

              <label className="form-label mt-3" style={{ marginLeft: "80px" }}>
                Address
              </label>
              <input
                type="text"
                name="identifier"
                class="form-control  rounded-5"
                style={{ marginLeft: "80px", width: "90%", height: "50px" }}
                value={address}
                onChange={handleAddressChange}
              ></input>
            </div>
            <div
              className="btn d-grid text-white mt-5 align-items-center  rounded-5"
              style={{
                background: "#026efe",
                marginLeft: "80px",
                height: "50px",
                width: "90%",
                fontSize: "13px",
              }}
              onClick={handlePlaceOrderClick}
            >
              Place Your Order
            </div>
          </div>

          <div className=" col-md-6 custom-subtotal1 shadow-md">
            <div className="mt-3 me-4 ms-4">
              <div className="d-flex justify-content-between mt-5">
                <h5 className="custom-font">Subtotal</h5>
                <p>
                  <LiaRupeeSignSolid /> {subtotal}
                </p>
              </div>
              <hr
                class=" border-bottom"
                style={{ width: "100%", marginTop: "-15px" }}
              />

              <div className="d-flex justify-content-between">
                <h5 className="custom-font"> Shipping</h5>
                <p>
                  <LiaRupeeSignSolid /> {shipping}
                </p>
              </div>
              <hr
                class=" border-bottom"
                style={{ width: "100%", marginTop: "-15px" }}
              />

              <div className="d-flex justify-content-between">
                <h5 className="custom-font"> Tax</h5>
                <p>
                  <LiaRupeeSignSolid /> {tax}
                </p>
              </div>
              <hr
                class=" border-bottom"
                style={{ width: "100%", marginTop: "-15px" }}
              />

              <div>
                <div className="d-flex justify-content-between">
                  <h5 className="custom-font1"> Order Total</h5>
                  <p>
                    <LiaRupeeSignSolid /> {totalOrder}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </container>
      {/* Empty div for space */}
      <div style={{ height: "50px" }}></div>
    </section>
  );
}

export default Checkout;
