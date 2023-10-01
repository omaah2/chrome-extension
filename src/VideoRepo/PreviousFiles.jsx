// import React from "react";
// import previous from "../Data/Data.json";
// import VideoCard from "./VideoCard";

// const PreviousFiles = () => {
//   return (
//     <div className="sm:px-8 bg-white flex flex-col gap-y-6 py-10 px-4 lg:px-[100px]">
//       <p id="work" className="text-lg font-medium">
//         Files from last week
//       </p>

//       <div className="grid gap-x-16 sm:grid-cols-2">
//         {previous.previous.map((video) => {
//           return (
//             <VideoCard
//               key={video.id}
//               title={video.title}
//               date={video.date}
//               video={video.img}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PreviousFiles;

import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const PreviousFiles = () => {
  const [previousVideos, setPreviousVideos] = useState([]);

  useEffect(() => {
    // Fetch previous video data from the API
    fetch("https://hng5.onrender.com/api/video/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setPreviousVideos(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching previous videos:", error);
      });
  }, []);

  return (
    <div className="sm:px-8 bg-white flex flex-col gap-y-6 py-10 px-4 lg:px-[100px]">
      <p id="work" className="text-lg font-medium">
        Files from last week
      </p>

      <div className="grid gap-x-16 sm:grid-cols-2">
        {previousVideos.map((video) => {
          return (
            <VideoCard
              key={video.videoId}
              title={video.videoId} 
              date={video.createdAt} 
              video={video.video}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PreviousFiles;
