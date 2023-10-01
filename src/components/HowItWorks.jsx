import React from "react";
import card from "../assets/card.png";

function HowItWorks() {
  return (
    <div className="text-black">
      <section className="bg-white mt-6">
        <div className="container mx-auto">
          <h3 className="text-center font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl p-4 sm:p-7">
            How It Works
          </h3>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
            <div className="w-full sm:w-2/5 pl-4 pr-4 sm:pr-0">
              <div className="rounded-full w-12 h-12 bg-blue-950 text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold">1</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-blue-950 text-center font-bold my-3">
                Record Screen
              </h3>
              <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-sm w-full mx-auto leading-5 text-center font-medium text-gray-500">
                Click the 'Start Recording' button in our extension. Choose
                which part of your screen to capture and who you want to send it
                to.
              </p>
              <img src={card} alt="" className="w-full mt-4" />
            </div>

            <div className="w-full sm:w-2/5 pl-4 pr-4 sm:pr-0 mt-4 sm:mt-0">
              <div className="rounded-full w-12 h-12 bg-blue-950 text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold">2</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-blue-950 text-center font-bold my-3">
                Share Your Recording
              </h3>
              <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-sm w-full mx-auto leading-5 text-center font-medium text-gray-500">
                We generate a shareable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform.
              </p>
              <img src={card} alt="" className="w-full mt-4" />
            </div>

            <div className="w-full sm:w-2/5 pl-4 pr-4 sm:pr-0 mt-4 sm:mt-0">
              <div className="rounded-full w-12 h-12 bg-blue-950 text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-semibold">3</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-blue-950 text-center font-bold my-3">
                Learn Effortlessly
              </h3>
              <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-sm w-full mx-auto leading-5 text-center font-medium text-gray-500">
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </p>
              <img src={card} alt="" className="w-full mt-4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
