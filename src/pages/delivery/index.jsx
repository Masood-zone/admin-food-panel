import React from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Delivery() {
  return (
    <div className="">
      <div className="flex items-center justify-between py-5 px-4">
        <h1 className="text-2xl font-bold ">Delivery</h1>
        <p className="flex items-center gap-2 hover:underline hover:cursor-pointer">
          Create Delivery
          <Link to="/add-delivery">
            <FaPlus />
          </Link>
        </p>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th className="text-lg">First Name</th>
              <th className="text-lg">Last Name</th>
              <th className="text-lg">Email</th>
              <th className="text-lg">Street Name</th>
              <th className="text-lg">City</th>
              <th className="text-lg">State</th>
              <th className="text-lg">Zip code</th>
              <th className="text-lg">Country</th>
              <th className="text-lg">Phone Number</th>
              <th className="text-lg">Order</th>
              <th className="text-lg">Edit</th>
              <th className="text-lg">Delete</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            <tr>
              {/* First Name */}
              <td>
                <p>Kirito</p>
              </td>
              {/* Last Name */}
              <td>
                <p>Kirigaya</p>
              </td>
              {/* Email */}
              <td>
                <p>kirito@gmail.com</p>
              </td>
              {/* Street name */}
              <td>
                <p>Tanoso Market</p>
              </td>
              {/* City */}
              <td>
                <p>Kumasi</p>
              </td>
              {/* State */}
              <td>
                <p>Ashante</p>
              </td>
              {/* Zip code */}
              <td>
                <p>0233</p>
              </td>
              {/* Country */}
              <td>
                <p>Ghana</p>
              </td>
              {/* Phone Number */}
              <td>
                <p>0554476903</p>
              </td>
              {/* Order */}
              <td>
                <p></p>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">
                  <MdModeEditOutline />
                </button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">
                  <MdDelete />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Delivery;
