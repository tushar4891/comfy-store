import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../Components";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <section className=" ">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
