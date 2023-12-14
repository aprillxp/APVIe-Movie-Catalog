import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
