import React from "react";
import Navbar from "../components/Navbar2";
import Header from "../VideoRepo/V-header";
import Previous from "../VideoRepo/PreviousFiles";
import Recent from "../VideoRepo/RecentFiles"

const videoRepo = () =>
{
    return (
      <main>
        <Navbar />
        <Header />
        <div className="border-t border-gray-300 my-4"></div>
        <Recent />
        <Previous />
      </main>
    );
};
export default videoRepo;