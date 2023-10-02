import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const RecentFiles = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Function to fetch video data from the API
    const fetchVideos = async () => {
      try {
        const response = await fetch("https://hng5.onrender.com/api/video/");
        if (response.status === 200) {
          const data = await response.json();
          setVideos(data.data);
        } else {
          console.error("Failed to fetch videos: Status code", response.status);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    // Call the fetchVideos function when the component mounts
    fetchVideos();
  }, []);

  return (
    <div className="sm:px-8 bg-white mt-1 flex flex-col gap-y-6 py-10 px-4 lg:px-[100px]">
      <p className="text-lg font-medium">Recent files</p>

      <div className="grid gap-x-16 sm:grid-cols-2">
        {videos.map((video) => (
          <VideoCard
            key={video.videoId}
            title={video.videoId}
            date={video.createdAt}
            video={video.video}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentFiles;
