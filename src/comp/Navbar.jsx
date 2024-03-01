import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-25 h-14 flex justify-between md:p-9 sm:4 items-center'>
      <div className='pt-4 pl-3'>
        <h5 className='rounded-md p-2 hidden md:block bg-indigo-700 text-white font-semibold md:text-xl sm:text-base'>
          Shubash Portfiolo
        </h5>
      </div>

      <button className={`text-white md:hidden flex justify-end ${isMenuOpen ? 'justify-start' : ''}`} onClick={toggleMenu}>
  {isMenuOpen ? <MdClose className="w-10 h-10" /> : <MdMenu className="w-10 h-10" />}
</button>

      {isMenuOpen && (
        <ul className='fixed md:hidden  bg-[#623a92]  top-2 h-screen  flex flex-col items-center   p-4'>
          <li className=' text-white m-1 underline   text-3xl hover:text-indigo-500  '><a href="/">Home</a></li>
          <li className='text-white m-1  underline  text-2xl hover:text-indigo-500'><a href="/">About_ME</a></li>
          <li className='text-white m-1  underline  text-2xl hover:text-indigo-500'><a href="/">Education</a></li>
          <li className='text-white m-1  underline  text-2xl hover:text-indigo-500'><a href="/">Project</a></li>
          <li className='text-white  m-1  underline  text-2xl hover:text-indigo-500'><a href="/">Experiences</a></li>

          <li className='text-white  m-1  underline  text-2xl hover:text-indigo-500'><a href="/">Contact_Me</a></li>
        </ul>
      )}
      
      {/* Navbar Options */}
      <ul className={`md:flex hidden font-semibold  text-white justify-start md:pt-6 ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
        <li className='  mx-8 md:text-2xl'>
          <a href="/">Home</a>
        </li>
        <li className=' mx-8 md:text-2xl md:hover:underline md:hover:text-indigo-900'>
          <a href="/">About_ME</a>
        </li>
        <li className=' mx-8 md:text-2xl'>
          <a href="/">Education</a>
        </li>
        <li className='sm:mx-[45px] mx-8 md:text-2xl'>
          <a href="/">Project</a>
        </li>
        <li className='sm:mx-[45px] mx-8 md:text-2xl'>
          <a href="/">Experiences</a>
        </li>
      </ul>
      
      {/* Contact Me */}
      <div className=' md:flex hidden   md:text-2xl md:pt-2 md:pr-8 md:mt-5 md:p-3  md:rounded-3xl md:bg-[#623a92] text-white md:hover:bg-green-800 '> <a href="#">Contact_Me</a>
      </div>
      
    </nav>
  );
}

export default Navbar;
