import React from "react";
import { RiMenuLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navbarData } from "./navbar-data";
import classNames from "classnames";
import { MdFoodBank } from "react-icons/md";
import Avatar from "../avatar";

function Navbar() {
  const location = useLocation();
  const onResetData = () => {
    console.log("data reset");
  };

  return (
    <nav className="w-64 h-full bg-[#901AD8] text-white flex px-4 py-5 flex-col gap-0 mx-0">
      <div className="w-36 h-36 mx-0 bg-[#7B11BC] rounded-lg mt-5">
        {/* Header */}
        <Link to="/">
          <MdFoodBank className="w-full h-full " />
          <p className="font-medium text-xl py-2">Admin Portal</p>
        </Link>
      </div>
      {/* Links */}
      <div className="flex-1 flex-col items-start justify-start py-1 mt-10 w-full mx-auto">
        {navbarData.map((item) => (
          <Link
            key={item.id}
            to={item.url}
            className={classNames(
              "flex items-center justify-start w-full h-12 rounded-lg my-2",
              {
                "text-gray-600 transition-all duration-500 ease-in-out  bg-gray-300":
                  location.pathname === item.url,
                "text-gray-300": location.pathname !== item.url,
              }
            )}
          >
            <span className="pl-2">{item.title}</span>
          </Link>
        ))}
      </div>
      {/* User Account */}
      <div className="w-full ">
        {/* Avatar icon */}
        <Avatar data={{}} onLogout={onResetData} />
      </div>
    </nav>
  );
}

export default Navbar;

export function MobileNav() {
  const navigate = useNavigate();
  return (
    // Main navbar
    <nav className="w-full h-16 bg-[#901AD8] text-white flex px-5 py-5 items-center justify-between">
      <div className="flex items-center max-md:justify-start">
        <MdFoodBank className="w-16 h-16 max-md:w-16 max-md:h-16 max-[399px]:w-16 max-[399px]:h-16" />
        <button
          onClick={() => navigate("/")}
          className="font-medium text-3xl btn btn-ghost max-md:text-xl max-[399px]:text-lg"
        >
          Admin Portal
        </button>
      </div>
      {/* Menu dropdown */}
      <details className="dropdown dropdown-bottom dropdown-end">
        <summary className="m-1 btn btn-ghost">
          <RiMenuLine fontSize={30} />
        </summary>
        <ul className="p-1 shadow-2xl menu dropdown-content z-[1] bg-base-100 mt-1 rounded-box w-96 max-[399px]:w-52 h-max">
          {navbarData.map((item) => (
            <li
              key={item.id}
              className="py-2 text-[17px] max-[399px]:text-sm max-[399px]:p-0"
            >
              <Link to={item.url} className=" text-black">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
