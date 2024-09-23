import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute px-10 text-white bg-gradient-to-r from-black">
      <div className="w-1/2 lg:w-1/3 h-full flex flex-col justify-center gap-2 lg:gap-7 mt-16 lg:mt-0">
        <h1 className="text-2xl  lg:text-5xl ">{title}</h1>
        <p className="text-[0.5rem]  lg:text-base">{overview}</p>
        <div className="flex text-[0.5rem] md:text-base  gap-4">
          <button className="rounded  bg-white text-black px-3 py-1  lg:px-10  lg:py-2">
             Play
          </button>
          <button className="rounded bg-[#ffffff60] text-white py-1 px-3 lg:px-10 lg:py-2">
            More info
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default VideoTitle;