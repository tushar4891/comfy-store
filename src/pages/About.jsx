import React from "react";
import "./About.css";
import { useSelector } from "react-redux";

function About() {
  const items = useSelector((state) => state);

  console.log("About page items : ", items.cart1);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center other-margin">
        <h1 className="fw-bold">
          We Love
          <span
            className="badge badge-primary text-white ms-2 rounded-5"
            style={{ background: "#016efe" }}
          >
            Comfy
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          iste veritatis mollitia, porro labore quae eveniet veniam temporibus
          pariatur vitae minus nostrum. Ut minus voluptatum itaque delectus
          cumque, quis eaque aliquam id libero beatae ipsa omnis iure tempora
          pariatur doloremque.
        </p>
      </div>
    </>
  );
}

export default About;
