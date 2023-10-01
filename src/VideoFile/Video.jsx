/* eslint-disable react/prop-types */
import React from "react";
import AcctBanner from "./AcctBanner";
import Preview from "./Preview";
import VideoReady from "./VideoReady";

const Video = (props) => {
  return (
    <>
      <div className="pb-12 bg-white">
        <div className="flex flex-col items-center gap-y-10 lg:items-start lg:flex-row sm:px-8 lg:px-[90px] py-10 gap-x-8 justify-center mx-auto">
          <VideoReady setSent={props.setSent} />
          <Preview />
        </div>

        <AcctBanner />
      </div>
    </>
  );
};

export default Video;
