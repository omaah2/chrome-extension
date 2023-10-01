import React, { useState } from "react";
import recording from "../assets/recording.svg";
import pause from "../assets/pause.svg";
import stop from "../assets/stop.svg";
import mic from "../assets/mic.svg";
import camera from "../assets/camera.svg";
import trash from "../assets/delete.svg";

const Panel = () => {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handleCameraToggle = () => {
    setCameraEnabled((prevCameraEnabled) => !prevCameraEnabled);

    
    chrome.runtime.sendMessage({ enableCamera: !cameraEnabled });
  };

  return (
    <div className="flex items-center">
      <label className="mr-4">
        Camera
        <input
          type="checkbox"
          checked={cameraEnabled}
          onChange={handleCameraToggle}
        />
      </label>

      <div
        className="border rounded-full bg-black text-white font-work font-medium text-xs flex py-3 px-5 gap-6"
      >
        <span className="flex items-center border-r border-gray-400 pr-4">
          <p>00:03:45</p>
          <img src={recording} alt="" className="ml-2" />
        </span>

        <div className="flex items-start gap-6">
          <span className="flex flex-col gap-2">
            <img src={pause} alt="" />
            <p>Pause</p>
          </span>

          <span className="flex flex-col gap-2">
            <img src={stop} alt="" />
            <p>Stop</p>
          </span>

          <span className="flex flex-col gap-2">
            <img src={camera} alt="" />
            <p>Camera</p>
          </span>

          <span className="flex flex-col gap-2">
            <img src={mic} alt="" />
            <p>Mic</p>
          </span>

          <span>
            <img src={trash} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Panel;
