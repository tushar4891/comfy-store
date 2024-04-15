import React from "react";
import { useLocation } from "react-router-dom";
import "./Orders.css";

function Orders() {
  const location = useLocation();

  // Check if location.state exists
  if (!location.state) {
    return (
      <section>
        <div className="mt-5" style={{ marginLeft: "80px" }}>
          <h2 className="fw-bold" style={{ letterSpacing: "3px" }}>
            Orders are empty
          </h2>
          <hr
            className="border-bottom mt-3"
            style={{ width: "93%", marginTop: "-15px" }}
          />
        </div>
      </section>
    );
  }

  const { name, address, quantities, prices, dates } = location.state;

  // Format the date in "hh:mm a - MMM DDth, YYYY" format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { hour: "2-digit", minute: "2-digit" };
    const time = date.toLocaleTimeString([], options);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const suffix =
      day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th";
    const formattedDate = `${time} - ${month} ${day}${suffix}, ${date.getFullYear()}`;
    return formattedDate;
  };

  return (
    <section>
      <div className="mt-5" style={{ marginLeft: "80px" }}>
        <h2 className="fw-bold" style={{ letterSpacing: "3px" }}>
          Your Orders
        </h2>
        <hr
          class=" border-bottom mt-3"
          style={{ width: "93%", marginTop: "-15px" }}
        />
      </div>

      {location.state && (
        <div className="col-md-10 ms-5">
          <table className="table text-center table-borderless table-striped table-hover shadow-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Products</th>
                <th>Cost</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {quantities.map((quantity, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{quantity}</td>
                  <td>{prices[index]}</td>
                  <td>{formatDate(dates[index])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default Orders;
