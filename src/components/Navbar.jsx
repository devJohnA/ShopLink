import React, { useState } from "react";
import "../App.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import {ClickImage} from "../assets/clickimage";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 px-7 max-w-[1340px] mx-auto font-['sans-serif]">
      <h1 className="text-3xl font-bold text-[#054C73]">ShopLink</h1>
      <ul className="hidden md:flex items-center">
        <li className="p-6 cursor-pointer font-semibold text-xl hover:text-[#054C73] transition-colors text-zinc-700">Home</li>
        <li className="p-6 cursor-pointer font-semibold text-xl hover:text-[#054C73] transition-colors text-zinc-700">About</li>
        <li className="p-6 cursor-pointer font-semibold text-xl hover:text-[#054C73] transition-colors text-zinc-700">Categories</li>
        <li className="p-6 cursor-pointer font-semibold text-xl hover:text-[#054C73] transition-colors text-zinc-700">Contact</li>
        <li className="ml-2">
          <button className="px-6 py-3 cursor-pointer bg-[#054C73] rounded-full text-white transition-colors font-semibold text-sm">
            Get the asdpp
          </button>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </div>

      <div
        className={`fixed top-0 w-[80%] h-full bg-white ease-in-out duration-500 z-50 font-['sans-serif] ${
          nav ? "left-0 border-r border-gray-200 shadow-lg" : "left-[-100%]"
        }`}
       >
        <ul className="uppercase p-7 flex flex-col items-center mt-24">
          <li className="p-4 cursor-pointer mb-4 font-semibold text-sm w-full text-center hover:text-[#054C73] transition-colors">Home</li>
          <li className="p-4 cursor-pointer mb-4 font-semibold text-sm w-full text-center hover:text-[#054C73] transition-colors">About</li>
          <li className="p-4 cursor-pointer mb-4 font-semibold text-sm w-full text-center hover:text-[#054C73] transition-colors">Categories</li>
          <li className="p-4 cursor-pointer mb-4 font-semibold text-sm w-full text-center hover:text-[#054C73] transition-colors">Contact</li>
          <li className="mt-4">
            <button className="px-8 py-3 cursor-pointer font-semibold text-sm bg-[#054C73] rounded-full text-white transition-colors">
              Get the app
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
