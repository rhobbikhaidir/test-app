import React from "react";
import charts from "../../../assets/charts.svg";
import number1 from "../../../assets/1.png";

function LeaderBoardReff() {
  return (
    <div className="max-w-sm mr-0  sm:flex-row sm:flex sm:justify-between sm:max-w-full sm:py-16 sm:px-8 py-4 px-4 sm:space-x-4">
      <div className="mb-12 flex-1  flex flex-wrap content-center  sm:ml-3 sm:mt-16">
        {/* content realtime */}
        <img src={charts} alt="charts board" />
      </div>

      {/* Left Content */}
      <div className="mb-8 flex-1 sm:ml-3  flex flex-col space-y-6  ">
        {/* content realtime */}

        <div className=" shadow-xl flex flex-row justify-between px-4 py-6 rounded-2xl bg-white dark:bg-black  mb-8 ">
          <p className="text-sm text-black">Ranking</p>
          <p className="text-sm text-black">Refferal ID</p>
          <p className="text-sm text-black">Total Invite</p>
        </div>
        <div className=" shadow-xl flex items-center flex-row justify-between px-4 py-2 rounded-2xl bg-white dark:bg-black ">
          <div className="bg-gray-200 rounded-full w-12 h-12">
            <p className="text-2xl font-bold text-green-400 text-center mt-2">
              1
            </p>
          </div>
          <p className="text-sm text-black">ID-9080</p>
          <p className="text-sm text-black">2000</p>
        </div>
        <div className=" shadow-xl flex items-center flex-row justify-between px-4 py-2 rounded-2xl bg-white dark:bg-black ">
          <div className="bg-gray-200 rounded-full w-12 h-12">
            <p className="text-2xl font-bold text-green-400 text-center mt-2">
              2
            </p>
          </div>
          <p className="text-sm text-black">ID-9080</p>
          <p className="text-sm text-black">1500</p>
        </div>
        <div className=" shadow-xl flex items-center flex-row justify-between px-4 py-2 rounded-2xl bg-white dark:bg-black ">
          <div className="bg-gray-200 rounded-full w-12 h-12">
            <p className="text-2xl font-bold text-green-400 text-center mt-2">
              3
            </p>
          </div>
          <p className="text-sm text-black">ID-9080</p>
          <p className="text-sm text-black">500</p>
        </div>

        {/* Content Price */}
      </div>
    </div>
  );
}

export default LeaderBoardReff;
