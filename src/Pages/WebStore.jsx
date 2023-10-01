import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import OverviewImage from "../assets/Overview.png";
import StarIcon from "../assets/Star.svg";
import verified from "../assets/Verified.svg"
import LeftArrowIcon from "../assets/left-arrow-icon.svg";
import RightArrowIcon from "../assets/right-arrow-icon.svg";

function ChromeWebStorePage() {
  const [activeTag, setActiveTag] = useState("Overview");
  const [showOverview, setShowOverview] = useState(true);

  const toggleOverview = () => {
    setActiveTag("Overview");
    setShowOverview(!showOverview);
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  return (
    <div className="bg-white text-black min-h-screen p-8">
      <main className="container mx-auto">
        <section className="p-4 sm:p-8 md:p-12 lg:flex justify-between">
          <div className="flex items-center">
            <div>
              <div className="flex items-center space-x-2">
                <img src={Logo} alt="Extension Logo" className="w-12 h-12 " />
                <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  HelpMeOut
                </h3>
              </div>
              <div className="text-blue-500 flex items-center pl-4 sm:pl-8 md:pl-12 lg:mt-2 space-x-2 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                <span className="">
                  <img
                    src={verified}
                    alt=""
                    width={18}
                    height={18}
                    style={{
                      filter: "brightness(0) saturate(100%) hue-rotate(120deg)",
                    }}
                  />
                </span>
                <p>HelpMeOut.com</p>
                <p>Featured</p>
              </div>

              <div className="flex items-center pl-4 sm:pl-8 md:pl-12 lg: mt-2 sm:mt-3 md:mt-4 space-x-2">
                <img src={StarIcon} alt="Star" className="w-4 h-4" />
                <img src={StarIcon} alt="Star" className="w-4 h-4" />
                <img src={StarIcon} alt="Star" className="w-4 h-4" />
                <img src={StarIcon} alt="Star" className="w-4 h-4" />
                <img src={StarIcon} alt="Star" className="w-4 h-4" />
                <p>
                  | <span className="text-blue-500">Productivity</span> |
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  80,000+ users
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add to Chrome
            </button>
          </div>
        </section>
        <hr className="my-4" />
        <div className="flex justify-center space-x-4">
          <button
            className={`${
              activeTag === "Overview"
                ? "bg-white text-blue-500 font-semibold"
                : "text-black"
            } border border-white shadow-black px-4 py-2 rounded-full`}
            onClick={toggleOverview}
          >
            {activeTag === "Overview" ? "Overview" : "Overview"}
          </button>
          <button
            className={`${
              activeTag === "Private Practices"
                ? "bg-white text-blue-500 font-semibold"
                : "text-black"
            } border border-white shadow-black px-4 py-2 rounded-full`}
            onClick={() => handleTagClick("Private Practices")}
          >
            Private Practices
          </button>
          <button
            className={`${
              activeTag === "Review"
                ? "bg-white text-blue-500 font-semibold"
                : "text-black"
            } border border-white shadow-black px-4 py-2 rounded-full`}
            onClick={() => handleTagClick("Review")}
          >
            Review
          </button>
          <button
            className={`${
              activeTag === "Related"
                ? "bg-white text-blue-500 font-semibold"
                : "text-black"
            } border border-white shadow-black px-4 py-2 rounded-full`}
            onClick={() => handleTagClick("Related")}
          >
            Related
          </button>
        </div>
        {activeTag === "Overview" && (
          <div className="mt-4 relative bg-gray-200">
            {showOverview && (
              <>
                <img
                  src={OverviewImage}
                  alt="Overview"
                  className="mx-auto border border-gray-200 p-4 rounded-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
                />
                <button
                  className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white rounded-full p-2"
                  onClick={
                    () => {} /* Implement the left arrow functionality */
                  }
                >
                  <img
                    src={LeftArrowIcon}
                    alt="Left Arrow"
                    className="w-9 h-9"
                  />
                </button>
                <button
                  className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white rounded-full p-2"
                  onClick={
                    () => {} /* Implement the right arrow functionality */
                  }
                >
                  <img
                    src={RightArrowIcon}
                    alt="Right Arrow"
                    className="w-9 h-9"
                  />
                </button>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default ChromeWebStorePage;
