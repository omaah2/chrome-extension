/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import frame from "../assets/Frame4.svg";
import play from "../assets/play.svg";
import volume from "../assets/volume.svg";
import settings from "../assets/settings.svg";

const Preview = (props) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    // Fetch video data from the API
    if (props.videoData) {
      fetch(`https://hng5.onrender.com/api/video/${props.videoData.videoId}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Error fetching video data");
          }
        })
        .then((data) => {
          // Assuming video data is successfully fetched
          setVideoData(data);
        })
        .catch((error) => {
          console.error("Error fetching video data:", error);
        });
    }
  }, [props.videoData]);

  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <div className="border mx-auto w-fit rounded-lg">
        <img src={frame} alt="" />
        {videoData && (
          <div className="flex py-3.5 px-3 items-center justify-between">
            <p className="text-[#939393] text-xl" id="inter">
              {videoData.duration}
            </p>
            <div id="work" className="flex gap-x-10 items-center">
              <span className="flex flex-col items-center gap-x-2">
                <img src={play} alt="" />
                <p className="text-xs font-medium">Play</p>
              </span>

              <span className="flex flex-col items-center gap-x-2">
                <img src={volume} alt="" />
                <p className="text-xs font-medium">Volume</p>
              </span>

              <span className="flex flex-col items-center gap-x-2">
                <img src={settings} alt="" />
                <p className="text-xs font-medium">Settings</p>
              </span>
            </div>
          </div>
        )}
        </div>

      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4">
          <p className="text-2xl font-semibold">Transcript</p>
          <select
            className="rounded-md border border-gray-400 text-base text-[#9D9D9D] w-32 py-2"
            name="lang"
          >
            <option value="English">English</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-4 scroll-mx-px">
          <span className="flex gap-x-6">
            <p>0.01</p>
            <p>
              First step. Open Facebook on your desktop or mobile device and
              locate &apos;Marketplace&apos; in the left-hand menu or at the top
              of the{" "}
            </p>
          </span>

          <span className="flex gap-x-6">
            <p>0.01</p>
            <p>
              First step. Open Facebook on your desktop or mobile device and
              locate &apos;Marketplace&apos; in the left-hand menu or at the top
              of the{" "}
            </p>
          </span>

          <span className="flex gap-x-6">
            <p>0.01</p>
            <p>
              First step. Open Facebook on your desktop or mobile device and
              locate &apos;Marketplace&apos; in the left-hand menu or at the top
              of the{" "}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preview;
