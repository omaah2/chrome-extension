// import React, { useState } from "react";
// import Ready from "../VideoFile/Video";
// import Footer from "../components/Footer";
// import Header from "../components/Navbar";

// const VideoFile = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Header />
//       <Ready openModal={openModal} /> {/* Pass openModal here */}
//       <Footer />
//     </>
//   );
// };

// export default VideoFile;


import React, { useState, useEffect } from "react";
import Video from "../VideoFile/Video";
import Footer from "../components/Footer";
import Header from "../components/Navbar";

const VideoFile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    // Fetch video data from the API
    fetch("https://hng5.onrender.com/api/video/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.data.length > 0) {
          // Assume the API returns an array of video data; you can modify this based on your API response structure
          setVideoData(data.data[0]); // Assuming you want the first video
        }
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
      });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      {videoData && (
        <Video
          openModal={openModal}
          videoData={videoData} // Pass the fetched video data to VideoReady component
        />
      )}
      <Footer />
    </>
  );
};

export default VideoFile;
