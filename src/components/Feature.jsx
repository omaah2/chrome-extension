import React from "react";
import image from "../assets/Video Repository.png";
import icona from "../assets/Icon-a.svg";
import iconb from "../assets/Icon-b.svg";
import iconc from "../assets/Icon-c.svg";

function Feature() {


  return (
    <div className="text-black min-h-screen">
      <section className="bg-white py-16 mt-6">
        <div className="text-center pb-10">
          <h1 className="text-3xl font-bold mb-2">Feature</h1>
          <p className="text-sm text-gray-400">
            Key Highlights Of Our Extension
          </p>
        </div>
        <div className="container mx-auto flex">
          <div className="w-1/2 pr-8">
            <div className="flex items-center">
              {" "}
              <img src={icona} alt="" width={"24"} />
              <h3 className="font-bold text-blue-950 text-lg ml-2">
                {" "}
                {/* Apply margin for spacing */}
                Simple Screen Recording
              </h3>
            </div>
            <p className="text-sm text-gray-400 px-8">
              Effortless screen record for everyone. Record <br /> with ease, no
              tech expertise required.
            </p>
            <div className="flex items-center mt-6">
              {" "}
              <img src={iconb} alt="" width={"24"} />
              <h3 className="font-bold text-blue-950 text-lg ml-2 ">
                {" "}
                Easy-To-Share URL
              </h3>
            </div>
            <p className="text-sm text-gray-400 px-8 ">
              Share your recordings instantly with a single link. <br />
              No attachment, no downloads.
            </p>
            <div className="flex items-center mt-6">
              {" "}
              <img src={iconc} alt="" width={"24"} />
              <h3 className="font-bold text-blue-950 text-lg ml-2">
                {" "}
                Revisit Recordings
              </h3>
            </div>
            <p className="text-sm text-gray-400 px-8">
              Access and review your past content effortlessly. <br />
              Your recordings, always at your fingertips.
            </p>
          </div>
          <div className="w-1/2">
            <img src={image} alt="" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
