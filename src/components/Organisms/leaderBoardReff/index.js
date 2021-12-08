import React from "react";
import charts from "../../../assets/charts.png";
import Gold from "../../../assets/Gold.png";
import Silver from "../../../assets/Silver.png";
import Bronze from "../../../assets/Bronze.png";

function LeaderBoardReff() {
  return (
    <div className="max-w-sm mr-0  sm:flex-row sm:flex sm:justify-between sm:max-w-full sm:py-16 sm:px-8 py-4 px-4 sm:space-x-4">
      <div
        className=" flex-1  sm:ml-3  mb-12 sm:mb-0 relative"
        // style={{ position: "relative" }}
      >
        <img src={charts} alt="charts" />
        <p className="text-xs font-bold dark:text-white sm:text-sm text-black absolute top-20 mt-0.5 left-10 sm:left-14 sm:top-24 sm:mt-6 ">
          ID-90800
        </p>
        <p className="text-xs font-bold dark:text-white sm:text-sm left-40 top-14 text-black absolute sm:top-20 sm:left-52 sm:ml-7 ">
          ID-9080
        </p>
        <p className="text-xs font-bold dark:text-white sm:text-sm right-10  top-24 mt-2.5 text-black absolute sm:top-36 sm:mt-3 sm:right-40 sm:mr-4 ">
          ID-9080
        </p>
      </div>
      <div className="mb-8 flex-1 sm:ml-3  flex flex-col space-y-6   ">
        <div className=" shadow-xl flex flex-row justify-between px-4 py-6 rounded-2xl bg-white dark:bg-black  mb-8 ">
          <p className="text-sm text-black dark:text-white">Ranking</p>
          <p className="text-sm text-black dark:text-white">Refferal ID</p>
          <p className="text-sm text-black dark:text-white">Total Invite</p>
        </div>
        <div className=" shadow-xl flex items-center flex-row justify-between px-4 py-2 rounded-2xl bg-white dark:bg-black ">
          {/* <div className="bg-gray-200 dark:bg-gray-400 rounded-full w-12 h-12">
            <p className="text-2xl font-bold text-green-400 text-center mt-2">
              1
            </p>
          </div> */}
          <img src={Gold} alt="Medal Gold" />
          <p className="text-sm text-black dark:text-white">ID-9080</p>
          <p className="text-sm text-black dark:text-white">2000</p>
        </div>
        <div className=" shadow-xl flex items-center flex-row justify-between px-4 py-2 rounded-2xl bg-white dark:bg-black ">
          {/* <div className="bg-gray-200 dark:bg-gray-400 rounded-full w-12 h-12">
            <p className="text-2xl font-bold text-green-400 text-center mt-2">
              2
            </p>
          </div> */}
          <img src={Silver} alt="Medal Silver" />
          <p className="text-sm text-black dark:text-white">ID-9080</p>
          <p className="text-sm text-black dark:text-white">1500</p>
        </div>
        <div className=" shadow-xl flex items-center flex-row justify-between px-4 py-2 rounded-2xl bg-white dark:bg-black ">
          {/* <div className="bg-gray-200 dark:bg-gray-400 rounded-full w-12 h-12">
            <p className="text-2xl font-bold text-green-400 text-center mt-2">
              3
            </p>
          </div> */}
          <img src={Bronze} alt="Medal Bronze" />
          <p className="text-sm text-black dark:text-white">ID-9080</p>
          <p className="text-sm text-black dark:text-white">500</p>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardReff;
