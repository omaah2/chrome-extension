import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white p-4 flex flex-wrap justify-between items-center sm:px-36">
      {/* Left Section */}
      <div className="flex items-center">
        <Link to={"/Signup"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="sm:hidden">
        <button
          className="text-blue-950 font-semibold text-lg"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Middle Section (Hidden on Small Screens) */}
      <ul
        className={`sm:flex flex-wrap space-x-4 mt-4 sm:mt-0 sm:space-x-8 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a href="/Feature">Features</a>
        </li>
        <li>
          <a href="/HowItWorks">How It Works</a>
        </li>
      </ul>

      {/* Right Section */}
      <div className="mt-4 sm:mt-0">
        <Link to={"/Vfile"}>
          <button className="text-blue-950 font-semibold text-lg">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
