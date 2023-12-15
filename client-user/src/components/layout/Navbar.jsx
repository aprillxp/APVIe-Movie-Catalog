import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/apviep-04.png";
import * as icon from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <div className="navbar bg-[#121212] px-28 text-black py-0 font-roboto">
      <div className="navbar-start">
        <Link to="/" className="w-20">
          <img src={logo} alt="" />
        </Link>
        <div className="flex">
          <button className=" text-white flex px-3 py-1 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <p className="m-auto">Menu</p>
          </button>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="w-96 flex">
          <input
            type="text"
            placeholder="Search APVIe"
            className="rounded w-24 md:w-full bg-white border-l border-gray-400 p-1 px-5"
          />
        </div>
      </div>
      <div className="navbar-end text-white font-semibold">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-md">
            <li>
              <p>+ Watchlist</p>
            </li>
            <li>
              <a>Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
