import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cart.css";
import { useSelector } from "react-redux";

import { addItem, removeItem } from "../Redux/Slices/CartSlices";
import { useDispatch } from "react-redux";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useAuth } from "../AuthContext";

function Cart() {
  const items = useSelector((state) => state);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate fetching data with a delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after delay (simulating data fetch)
    }, 1000);

    // Clean up timer on component unmount or re-render
    return () => clearTimeout(timer);
  }, []);

  const QuantitySelect = () => {
    const options = Array.from({ length: 10 }).map((_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));
    return options;
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  useEffect(() => {
    let total = 0;
    let shippingTotal = 0;
    items.cart.forEach((item) => {
      total += item.price * item.quantity;
      if (item.shipping === true) shippingTotal += 5;
    });
    setSubtotal(Math.ceil(total));
    setShipping(shippingTotal);
    setTax(Math.ceil(total * 0.1));
  }, [items.cart]);

  useEffect(() => {
    setOrderTotal(subtotal + shipping + tax);
  }, [subtotal, shipping, tax]);

  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/checkout", {
        state: {
          subtotal: subtotal,
          shipping: shipping,
          tax: tax,
          totalOrder: orderTotal,
        },
      });
    } else {
      // Store the current pathname in session storage
      sessionStorage.setItem("prevPathname", location.pathname);
      // Redirect to the login page
      navigate("/login");
    }
  };

  return (
    <section>
      <div>
        {items.cart.length > 0 ? (
          <>
            <h2
              className="mt-5 cart-name fw-bold"
              style={{ letterSpacing: "3px" }}
            >
              Shopping Cart
            </h2>
            <hr
              class="bg-danger border-bottom border-dark border-1"
              style={{ width: "90%", marginLeft: "50px", marginTop: "20px" }}
            />
          </>
        ) : (
          <>
            <h2 className="mt-5 cart-name fw-bold">Your Cart Is Empty</h2>
            <hr
              class="bg-danger border-bottom border-dark border-1"
              style={{ width: "90%", marginLeft: "50px", marginTop: "20px" }}
            />
          </>
        )}
        {/* Exit rendering if cart is empty */}
        {items.cart.length === 0 && null}
      </div>
      {items.cart.length > 0 && (
        <section>
          {loading ? ( // Render spinner if loading
            <div className="text-center mt-5">
              <div
                className="spinner-grow spinner-grow-sm "
                style={{ width: "2rem", height: "2rem" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-9 d-flex flex-column">
                {items.cart.map((item, index) => (
                  <div>
                    <div className="d-flex ">
                      <div className="col-md-2">
                        <img
                          src={item.image}
                          alt={index}
                          style={{ width: "125px", height: "125px" }}
                          className="rounded-5 ms-5 mt-3"
                        />
                      </div>

                      <div className="col-md-3 ms-5">
                        <div className="ms-5 mt-3">
                          <h6 className="fw-bold">{item.title}</h6>
                          <h6 className="mt-3 fs-6 text-muted">
                            {item.companyName}
                          </h6>
                          <p className="d-flex mt-3">
                            Color :
                            <span
                              className="dot ms-3 mt-1"
                              style={{ backgroundColor: item.color }}
                            ></span>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-2">
                        <div className="mt-3 middle-col">
                          <p>Amount</p>
                          <select
                            className="form-select rounded-3 custom-selector"
                            value={item.quantity}
                            onChange={(e) =>
                              setSelectedQuantity(e.target.value)
                            }
                          >
                            <QuantitySelect />
                          </select>
                          <p
                            className="mt-3 text-primary"
                            onClick={() => handleRemove(item)}
                            style={{ cursor: "pointer" }}
                          >
                            remove
                          </p>
                        </div>
                      </div>

                      <div className="col-md-2">
                        <div className="last-col text-center mt-3">
                          <p className="fw-bold">
                            <LiaRupeeSignSolid />
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    <hr
                      class="bg-danger border-bottom border-dark border-1"
                      style={{
                        width: "70%",
                        marginLeft: "50px",
                        marginTop: "20px",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="col-md-3 custom-subtotal shadow-md">
                <div className="mt-5">
                  <div className="d-flex justify-content-between">
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
                        <LiaRupeeSignSolid /> {orderTotal}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="btn d-grid text-white align-items-center"
                  style={{
                    backgroundColor: "#057aff",
                    marginTop: "70px",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                  onClick={handleClick}
                >
                  {isLoggedIn ? "Checkout" : "Log In"}
                </div>
              </div>
            </div>
          )}
        </section>
      )}
      {/* Empty div for space */}
      <div style={{ height: "100px" }}></div>
    </section>
  );
}

export default Cart;
