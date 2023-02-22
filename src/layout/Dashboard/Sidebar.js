import React from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { GoListUnordered } from "react-icons/go";
import { FaMicroblog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='col-span-2 bg-sky-600 h-[calc(100vh-25px)] p-5 rounded-lg'>
      <ul className='flex gap-3  flex-col h-full'>

        <div id="profile" className="space-y-3">
          <img
            src="https://i.ibb.co/QpY6TWQ/professional-image.jpg"
            alt="Admin img"
            className="w-10 md:w-16 rounded-full mx-auto"
          />
          <div>
            <h2
              className="font-medium text-lg md:text-lg text-center text-white"
            >
              Eduard Pantazi
            </h2>
            <p className="text-xs text-white text-center">Admin</p>
          </div>
        </div>

        <div
          className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
          <input
            type="text"
            className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
            placeholder="Search" />
          <button
            className="rounded-tr-md bg-indigo-600 text-white rounded-br-md px-2 py-3 hidden md:block">
            <FiSearch />
          </button>
        </div>

        <Link to='/dashboard'>
          <li className='flex gap-2 text-white items-center'>
            <GoListUnordered />
            <span>Blog List</span>
          </li>
        </Link>
        <Link to='add-product'>
          <li className='flex gap-2 text-white items-center'>
            <FaMicroblog />
            <span>Add Blog</span>
          </li>
        </Link>
        <Link to='/' className="mt-auto">
          <li className='flex items-center gap-2 text-white'>
            <ImHome />
            <span>Home</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
