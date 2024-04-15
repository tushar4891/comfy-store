import React, { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill, BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { useSelector } from "react-redux";

function Navbar() {
  const [theme, setTheme] = useState("light-theme");
  const items = useSelector((state) => state);
  // const handleTheme = () => {
  //   if (theme === "dark-theme") {
  //     setTheme("light-theme");
  //   } else {
  //     setTheme("dark-theme");
  //   }
  // };

  // useEffect(() => {
  //   document.body.className = theme;
  //   console.log("Theme ==> ", theme);
  // }, [theme]);

  return (
    <nav className="navbar navbar-expand-sm  navbar-clr">
      <div className="container">
        <NavLink
          to="/"
          className=" navbar-brand btn btn-md fs-6 d-none d-md-block text-white fs-6"
          style={{ background: "#016efe" }}
        >
          C
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <FaBarsStaggered className="text-white" />
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto ">
            <li class="nav-item">
              <Link
                class="nav-link active text-black  mx-3"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-black mx-3" to="about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-black mx-3" to="products">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link text-black mx-3 "
                // style={{ background: "#02152c" }}
                to="/cart"
              >
                Cart
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-black mx-3" to="checkout">
                Checkout
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-black mx-3" to="orders">
                Orders
              </Link>
            </li>
          </ul>
          {/* <NavLinks /> */}
        </div>

        {/* <span onClick={handleTheme}>
          {theme === "light-theme" ? <BsSunFill /> : <BsMoonFill />}
        </span> */}

        <NavLink to="/cart" class="position-relative">
          <div>
            <BsCart3
              style={{ height: "30px", width: "30px" }}
              className="text-black"
            />
            <span
              class="position-absolute top-5 start-90 translate-middle badge rounded-pill"
              style={{ background: "#016efe" }}
            >
              {items.cart.length}
            </span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
