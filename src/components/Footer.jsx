import React from "react";
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-blue-950 p-4">
      <div className="flex justify-between items-center text-white">
        {/* Icon Section */}
        <div className="flex space-x-4">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <h3>Menu</h3>
          <ul className="text-xs font-thin leading-7">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Converter</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3>About Us</h3>
          <ul className="text-xs font-thin leading-7">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Screen Record */}
        <div>
          <h3>Screen Record</h3>
          <ul className="text-xs font-thin leading-7">
            <li>
              <a href="#">Browser window</a>
            </li>
            <li>
              <a href="#">Desktop</a>
            </li>
            <li>
              <a href="#">Appliction</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
