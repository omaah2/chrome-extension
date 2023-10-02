import React from "react";

import logo from "../assets/logo.png";
import arrow from "../assets/arrow-down.svg";
import pfp from "../assets/profile.svg";

const Navbar = () => {
  return (
    <header className="flex bg-white py-[22px] px-4 sm:px-6 lg:px-[100px] items-center justify-between">
      <div>
        <img className="w-3/4" src={logo} alt="help-me-out-logo" />
      </div>

      <div className="flex items-center">
        <img src={pfp} alt="" />
        <p id="work" className="text-base">
          John Mark
        </p>
        <img src={arrow} alt="" />
      </div>
    </header>
  );
};

export default Navbar;


