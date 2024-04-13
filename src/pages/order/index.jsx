import React from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Order() {
  return (
    <div className="">
      <div className="flex items-center justify-between py-5 px-4">
        <h1 className="text-2xl font-bold ">Orders</h1>
        <p className="flex items-center gap-2 hover:underline hover:cursor-pointer">
          Create
          <Link to="/add-order">
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
              <th className="text-lg">Description</th>
              <th className="text-lg">Quantity</th>
              <th className="text-lg">Sub Total</th>
              <th className="text-lg">Delivery Fee</th>
              <th className="text-lg">Edit</th>
              <th className="text-lg">Delete</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            <tr>
              {/* Description */}
              <td>
                <p>This is one of the best foods in town, right now!</p>
              </td>
              {/* Quantity */}
              <td>
                <p>5</p>
              </td>
              {/* Total */}
              <td>
                <p>100</p>
              </td>
              {/* Price */}
              <td>
                <p>50</p>
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

export default Order;
