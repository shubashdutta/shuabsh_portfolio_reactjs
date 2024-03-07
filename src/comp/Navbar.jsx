import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-25 h-14 flex justify-between md:p-9 sm:4 items-center">
      <div className="pt-4 pl-3 ">
        <h5 className="md:rounded-lg  md:p-2 hidden md:block bg-indigo-700 text-white  md:text-xl ">
          Shubash Portfiolo
        </h5>
      </div>

      <button
        className={`text-white md:hidden ${
          isMenuOpen ? " justify-start pr-14" : " pr-24 justify-end"
        }`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <MdClose className="w-10 h-10   " />
        ) : (
          <MdMenu className="w-10 h-10" />
        )}
      </button>
      {isMenuOpen && (
        <ul className="fixed md:hidden  bg-[#623a92]  top-5 h-screen  flex flex-col items-center   p-4">
          <li className=" text-white m-1 underline   text-3xl hover:text-indigo-500  ">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white m-1  underline  text-2xl hover:text-indigo-500">
            <Link to="/about">About_ME</Link>
          </li>
          <li className="text-white m-1  underline  text-2xl hover:text-indigo-500">
            <Link to="/">Education</Link>
          </li>
          <li className="text-white m-1  underline  text-2xl hover:text-indigo-500">
            <Link to="/project">Project</Link>
          </li>
          <li className="text-white  m-1  underline  text-2xl hover:text-indigo-500">
            <Link to="/skills">Experiences</Link>
          </li>

          <li className="text-white  m-1  underline  text-2xl hover:text-indigo-500">
            <Link to="/Contact">Contact_Me</Link>
          </li>
        </ul>
      )}

      {/* Navbar Options */}
      <ul
        className={`md:flex hidden font-semibold  md:justify-evenly text-white md:pt-6 ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <li className="  mx-8 md:text-xl md:hover:underline md:hover:text-indigo-900">
          <Link to="/">Home</Link>
        </li>

        <li className=" mx-8 md:text-xl md:hover:underline md:hover:text-indigo-900">
          <Link to="/about">About_ME</Link>
        </li>
        <li className="  mx-8 md:text-xl md:hover:underline md:hover:text-indigo-900">
          <Link to="/">Education</Link>
        </li>
        <li className=" mx-8 md:text-xl md:hover:underline md:hover:text-indigo-900">
          <Link to="/project">Project</Link>
        </li>
        <li className=" mx-8 md:text-xl md:hover:underline md:hover:text-indigo-900">
          <Link to="/skills">Experiences</Link>
        </li>
      </ul>

      {/* Contact Me */}
      <div className=" md:flex hidden   md:text-2xl md:pt-2 md:pr-8 md:mt-5 md:p-3  md:rounded-3xl md:bg-[#623a92] text-white md:hover:bg-green-800 ">
        <Link to="/Contact">Contact_Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;
