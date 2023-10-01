import React from "react";
import search from "../assets/search.svg";

const Header = () => {
  return (
    <section className="sm:px-6 lg:px-[100px] bg-white py-8">
      <div className="flex justify-between">
        <span className="flex-1">
          <h4 className="font-bold text-[32px]">Hello, John Mark</h4>
          <p className="text-sm">Here are your recorded videos</p>
        </span>

        <div className=""></div>

        <span className="flex flex-1 gap-x-2 p-5 items-center rounded-[12px] border border-primary-primary-50 bg-gray-100">
          <img src={search} alt="" />
          <input
            type="search"
            placeholder="Search for a particular video"
            className="bg-transparent w-full outline-none text-sm border-none"
            name="search"
          />
        </span>
      </div>
    </section>
  );
};

export default Header;
