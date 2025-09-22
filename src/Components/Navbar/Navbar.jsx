import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-[#15803D] shadow-sm py-2">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#15803D] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="text-base font-medium cursor-pointer text-white">
                <a>About</a>
              </li>
              <li className="text-base font-medium cursor-pointer text-white">
                <a>Gallery</a>
              </li>
              <li className="text-base font-medium cursor-pointer text-white">
                <a>Plant a Tree</a>
              </li>
            </ul>
          </div>
          <a className="text-2xl text-white cursor-pointer font-bold">
            Green Earth
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-base font-medium cursor-pointer text-white">
              <a>About</a>
            </li>
            <li className="text-base font-medium cursor-pointer text-white">
              <a>Gallery</a>
            </li>
            <li className="text-base font-medium cursor-pointer text-white">
              <a>Plant a Tree</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="py-3 px-5 rounded-full bg-[#FACC15] text-[#15803D] text-base font-medium cursor-pointer">
            Plant a Tree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
