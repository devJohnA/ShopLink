import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNav(false); // Close mobile menu after clicking
    }
  };

  const handleGetApp = () => {
    window.open(
      "https://github.com/devJohnA/ShopLink/releases/download/v1.0.0/app-release.apk",
      "_blank"
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="flex justify-between items-center h-24 px-7 max-w-[1340px] mx-auto">
        <h1
          className="text-3xl font-bold text-[#054C73] cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          ShopLink
        </h1>

        <ul className="hidden md:flex items-center">
          <li
            className="p-6 cursor-pointer font-semibold text-xl hover:text-[#054C73] transition-colors text-zinc-700"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="p-6 cursor-pointer font-semibold text-xl hover:text-[#054C73] transition-colors text-zinc-700"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="p-6 cursor-pointer font-semibold text-xl hover:text-[#054C73] transition-colors text-zinc-700"
            onClick={() => scrollToSection("categories")}
          >
            Categories
          </li>
          <li className="mt-4">
            <button
              onClick={handleGetApp}
              className="px-8 py-3 cursor-pointer font-semibold text-sm bg-[#054C73] rounded-full text-white transition-colors hover:bg-[#043c5a]"
            >
              Get the app
            </button>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div
          className={`fixed top-0 w-[80%] h-full bg-white ease-in-out duration-500 z-50 ${
            nav ? "left-0 border-r border-gray-200 shadow-lg" : "-left-full"
          }`}
        >
          <ul className="uppercase p-7 flex flex-col items-center mt-24">
            <li
              className="p-4 cursor-pointer mb-4 font-semibold text-sm w-full text-center hover:text-[#054C73] transition-colors"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="p-4 cursor-pointer mb-4 font-semibold text-sm w-full text-center hover:text-[#054C73] transition-colors"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="p-4 cursor-pointer mb-4 font-semibold text-sm w-full text-center hover:text-[#054C73] transition-colors"
              onClick={() => scrollToSection("categories")}
            >
              Categories
            </li>
            <li className="mt-4">
              <button
                onClick={handleGetApp}
                className="px-8 py-3 cursor-pointer font-semibold text-sm bg-[#054C73] rounded-full text-white transition-colors hover:bg-[#043c5a]"
              >
                Get the app
              </button>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {nav && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleNav}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
