import React from "react";
import previous from "../Data/Data.json";
import VideoCard from "./VideoCard";

const PreviousFiles = () => {
  return (
    <div className="sm:px-8 bg-white flex flex-col gap-y-6 py-10 px-4 lg:px-[100px]">
      <p id="work" className="text-lg font-medium">
        Files from last week
      </p>

      <div className="grid gap-x-16 sm:grid-cols-2">
        {previous.previous.map((video) => {
          return (
            <VideoCard
              key={video.id}
              title={video.title}
              date={video.date}
              video={video.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PreviousFiles;
