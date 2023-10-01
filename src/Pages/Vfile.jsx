import React, { useState } from "react";
import Ready from "../VideoFile/Video";
import Footer from "../components/Footer";
import Header from "../components/Navbar";

const VideoFile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <Ready openModal={openModal} /> {/* Pass openModal here */}
      <Footer />
    </>
  );
};

export default VideoFile;
