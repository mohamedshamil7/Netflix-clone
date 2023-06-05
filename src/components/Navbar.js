import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to='/'>
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
        srcset=""
      />
      </Link>


     <div>
      {/* <Link to='/'> */}
      <button className=" pr-4  text-white">
        Sign Up
      </button>
      {/* </Link> */}
     
      <button className=" hover:bg-[#c11119] bg-[#e50914] px-6 py-2 rounded-md text-white">
      Log In
      </button>

     </div>
     
    </div>
  );
};

export default Navbar;
