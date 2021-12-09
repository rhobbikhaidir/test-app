import React, { useState } from "react";
import silverChart from "../../../assets/silverChart.png";
import goldChart from "../../../assets/goldChart.png";
import bronzeChart from "../../../assets/bronzeChart.png";
import Gold from "../../../assets/Gold.png";
import Silver from "../../../assets/Silver.png";
import Bronze from "../../../assets/Bronze.png";

function LeaderBoardReff() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    setScroll(true);
  };
  return (
    <div className="max-w-sm mr-0  sm:flex-row sm:flex sm:justify-between sm:max-w-full sm:py-16 sm:px-8 py-4 px-4 sm:space-x-4">
      <div className=" flex-1 flex flex-wrap content-center sm:ml-3 sm:px-8  mb-12 sm:mb-0 ">
        <div className="relative flex-1 inline-block">
          <img src={silverChart} alt="silver charts" className="mt-8 block" />
          <p className="text-black font-bold text-base absolute dark:text-white"></p>
        </div>
        <div className="relative flex-1 inline-block">
          <img src={goldChart} alt="" className="block" />
          <p className="text-black font-bold absolute text-sm sm:text-base  sm:top-1/5 mt-2 sm:left-3/3   dark:text-white">
            ID-9080
          </p>
        </div>
        <div className="relative flex-1 inline-block">
          <img src={bronzeChart} alt="" className="mt-12 block" />
          <p className="text-black font-bold text-base absolute dark:text-white"></p>
        </div>
      </div>
      <div className="mb-8 flex-1 sm:ml-3  flex flex-col space-y-6 ">
        <div className=" shadow-xl flex flex-row justify-between px-4 py-6 rounded-2xl bg-white dark:bg-black  mb-8 ">
          <p className="text-sm text-black dark:text-white">Ranking</p>
          <p className="text-sm text-black dark:text-white">Refferal ID</p>
          <p className="text-sm text-black dark:text-white">Total Invite</p>
        </div>
        <div
          className={`overflow-y-scroll  ${
            scroll
              ? "border-t-2 border-b-2 border-gray-400 border-opacity-10"
              : ""
          } h-64 px-2 py-2 flex flex-col space-y-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrol overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
          onScroll={handleScroll}
        >
          <div className=" shadow-xl flex items-center flex-row justify-between px-6 py-2 rounded-2xl bg-white dark:bg-black ">
            <div className="w-12 h-12 items-center">
              <img className="w-10 mt-0.5 h-11" src={Gold} alt="Medal Gold" />
            </div>
            <p className="text-sm text-black dark:text-white">ID-9080</p>
            <p className="text-sm text-black dark:text-white">2000</p>
          </div>
          <div className=" shadow-xl flex items-center flex-row justify-between px-6 py-2 rounded-2xl bg-white dark:bg-black  ">
            <div className="w-12 h-12 items-center">
              <img
                className="w-10 mt-0.5 h-11"
                src={Silver}
                alt="Medal Silver"
              />
            </div>
            <p className="text-sm text-black dark:text-white">ID-9080</p>
            <p className="text-sm text-black dark:text-white">1500</p>
          </div>
          <div className=" shadow-xl flex items-center flex-row justify-between px-6 py-2 rounded-2xl bg-white dark:bg-black ">
            {/* <div className="bg-gray-200 dark:bg-gray-400 rounded-full w-12 h-12">
            <p className="text-2xl font-bold text-green-400 text-center mt-2">
              3
            </p>
          </div> */}
            <div className="w-12 h-12 items-center">
              <img
                className="w-10 mt-0.5 h-11"
                src={Bronze}
                alt="Medal Bronze"
              />
            </div>
            <p className="text-sm text-black dark:text-white">ID-9080</p>
            <p className="text-sm text-black dark:text-white">500</p>
          </div>
          <div className=" shadow-xl flex items-center flex-row justify-between px-6 py-2 rounded-2xl bg-white dark:bg-black ">
            <div className="bg-gray-200 dark:bg-gray-400 rounded-full w-12 h-12">
              <p className="text-2xl font-bold text-green-400 text-center mt-2">
                4
              </p>
            </div>
            <p className="text-sm text-black dark:text-white">ID-9080</p>
            <p className="text-sm text-black dark:text-white">500</p>
          </div>
          <div className=" shadow-xl flex items-center flex-row justify-between px-6 py-2 rounded-2xl bg-white dark:bg-black  ">
            <div className="bg-gray-200 dark:bg-gray-400 rounded-full w-12 h-12">
              <p className="text-2xl font-bold text-green-400 text-center mt-2">
                5
              </p>
            </div>
            <p className="text-sm text-black dark:text-white">ID-9080</p>
            <p className="text-sm text-black dark:text-white">400</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardReff;
