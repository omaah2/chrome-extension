import React from "react";
import recentsData from "../Data/Data.json";
import VideoCard from "./VideoCard";

const RecentFiles = () => {
  return (
    <div className="sm:px-8 bg-white mt-1 flex flex-col gap-y-6 py-10 px-4 lg:px-[100px]">
      <p className="text-lg font-medium">Recent files</p>

      <div className="grid gap-x-16 sm:grid-cols-2">
        {recentsData.recents.map((video) => {
          const videoImage = require(`../assets/${video.img}`).default;

          return (
            <VideoCard
              key={video.id}
              title={video.title}
              date={video.date}
              video={videoImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentFiles;
