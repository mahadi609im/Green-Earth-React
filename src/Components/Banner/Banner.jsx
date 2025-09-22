import React from 'react';

const Banner = () => {
  return (
    <div className="h-[383px] bg-[#CFF0DC] flex items-center justify-center">
      <div className="px-[3%] md:px-0">
        <h1 className="text-center text-[26px] md:text-[32px] lg:text-[48px] font-bold text-[#1F2937]">
          Plant a Tree, Grow a Future
        </h1>
        <p className="font-normal text-sm md:text-base text-[#1F2937] max-w-[583px] w-full text-center pt-2 pb-6">
          Join our mission to plant 1 million trees and make the Earth greener
          for future generations.
        </p>
        <div className="flex justify-center items-center">
          <button className="py-3 px-5 rounded-full bg-[#FACC15] text-[#15803D] text-base font-medium cursor-pointer mx-auto text-center">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
