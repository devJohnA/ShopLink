import React from "react";
import "../App.css";



const Footer = () => {

      const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNav(false); // Close mobile menu after clicking
    }
  };


  return (
    <footer className="w-full py-14 mt-23">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <h2 className="flex justify-center text-[#054C73] font-bold text-2xl">
            ShopLink
          </h2>

          {/* Nav Links */}
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-900"  onClick={() => scrollToSection('home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-900"  onClick={() => scrollToSection('about')}>
                About
              </a>
            </li>
          </ul>

          {/* Social Icons (TikTok + Facebook only) */}
          <div className="flex space-x-10 justify-center items-center mb-14">
            {/* TikTok (Updated Icon) */}
            <a
              href="#"
              className="block text-gray-900 transition-all duration-500 hover:text-gray-600"
            >
              <svg
                className="w-7.5 h-7.5"
                viewBox="0 0 256 256"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M232 72.1a55.8 55.8 0 0 1-40-16.6A56.3 56.3 0 0 1 176 16h-32a8 8 0 0 0-8 8v120.4a24 24 0 1 1-17-23l1 .3V88a8 8 0 0 0-8-8 72 72 0 1 0 72 72V94.7a88 88 0 0 0 48 14.4 8 8 0 0 0 8-8V80a8 8 0 0 0-8-7.9Z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="block text-gray-900 transition-all duration-500 hover:text-blue-600"
            >
              <svg
                className="w-[0.938rem] h-6.5"
                viewBox="0 0 15 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* Bottom Text */}
          <span className="text-lg text-gray-500 text-center block">
            ©<a href="https://pagedone.io/">ShopLink</a> 2025, All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
