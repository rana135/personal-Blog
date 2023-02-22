import React from "react";
import { Link } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className='h-14 bg-sky-600 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-white'>
        <h1>Personal Blog</h1>

        <li className='flex bg-white mx-auto h-8 w-full max-w-md  rounded-full pr-3'>
          <input
            className='h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none'
            type='text'
            name='search'
            id='search'
          />
          <button>
            <BiSearchAlt />
          </button>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <Link to='/dashboard'>
          <li title='Dashboard' className='bg-indigo-500 p-2 rounded-full'>
            <MdDashboard />
          </li>
        </Link>
        <Link to='/wishlist'>
          <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
            <GiEternalLove className='text-red-500' />
          </li>
        </Link>
        <Link to='/history'>
          <li title='History' className='bg-indigo-500 p-2 rounded-full'>
            <FaHistory className='text-white ' />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
