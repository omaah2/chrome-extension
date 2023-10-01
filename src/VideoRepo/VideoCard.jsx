/* eslint-disable react/prop-types */
import React from "react";
import more from "../assets/more.svg";
import link from "../assets/link.svg";

const VideoCard = (props) => {
  return (
    <div
      key={props.key}
      className="w-fit p-4 flex flex-col gap-y-6 bg-gray-50 rounded-lg border"
    >
      <img src={props.video} alt="" className="rounded-lg border" />
      <div className="flex justify-between items-center">
        <span>
          <p className="text-xl font-semibold">{props.title}</p>
          <p className="text-base text-[#B6B3C6]">{props.date}</p>
        </span>

        <span className="flex gap-x-6 items-center">
          <img src={link} alt="" />
          <img src={more} alt="" />
        </span>
      </div>
    </div>
  );
};

export default VideoCard;



