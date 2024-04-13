import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

function Avatar({ data, onLogout }) {
  return (
    <div className="flex items-start gap-2  h-auto w-full rounded-lg py-1 px-1">
      {/* Avatar icon */}
      <div className="avatar">
        <div className="w-12 mask mask-circle">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      {/* Avatar Info */}
      <div className="">
        <p>Masood</p>
        <p>masood@gmail.com</p>
        {/* <p>{data ? data?.username : "No Data"}</p> */}
        {/* <p>{data ? data?.email : "No Data"}</p> */}
        <button
          className="w-full flex items-center gap-5 hover:bg-gray-600 p-1 rounded-md"
          onClick={onLogout}
        >
          <span className="">Logout</span>
          <IoLogOutOutline className="" />
        </button>
      </div>
    </div>
  );
}

export default Avatar;
