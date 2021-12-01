import React from "react";
import USDT from "../../../assets/USDT.svg";
import Litedex from "../../../assets/litedex.png";
import arrowDown from "../../../assets/arrowdown.svg";
import arrowDown2 from "../../../assets/arrowSvg.svg";

const TopContent = () => {
  return (
    <div className="max-w-sm mr-0 block sm:flex sm:justify-between sm:max-w-full sm:py-16 sm:px-8 py-4 px-4 sm:space-x-4">
      <div className="mb-8  flex-1 flex-col sm:ml-3 sm:flex-row  ">
        {/* content realtime */}
        <div className="flex justify-between space-x-0.5 sm:space-x-5 max-w-xs">
          <div className="rounded-3xl  sm:h-20 flex-1 flex-row items-center shadow-lg dark:bg-black pb-4 ">
            <h1 className="text-2xl sm:mb-4 mt-2 sm:text-5xl sm:flex inline-block ml-4 sm:mt-6 text-center font-normal text-black dark:text-gray-300">
              01{" "}
              <span className="text-xs text-center mb-2 sm:text-sm sm:flex-row flex-1 ml-1 mt-6 sm:mr-12 text-gray-700 dark:text-gray-300 ">
                Day
              </span>
            </h1>
          </div>
          <div className="rounded-3xl  sm:h-20 flex-1 flex-row items-center shadow-lg dark:bg-black  px-1 ">
            <h1 className="text-2xl mt-2  sm:text-5xl inline-block sm:flex flex-1  ml-4 sm:mt-6 text-center font-normal text-black dark:text-gray-300">
              01{" "}
              <span className="text-xs text-center mb-2 sm:text-sm sm:flex-row  flex-1 ml-1 mt-6 sm:mr-12 text-gray-700 dark:text-gray-300">
                Hours
              </span>
            </h1>
          </div>
          <div className="rounded-3xl  sm:h-20 flex-1 flex-row  items-center shadow-lg dark:bg-black  ">
            <h1 className="text-2xl mt-2 sm:text-5xl inline-block sm:flex  ml-4 sm:mt-6 text-center font-normal text-black dark:text-gray-300">
              00{" "}
              <span className="text-xs text-center mb-2 sm:text-sm sm:flex-row   mt-6 sm:mr-10 text-gray-700 dark:text-gray-300">
                Minute
              </span>
            </h1>
          </div>
          <div className="rounded-3xl flex-1 sm:h-20 shadow-lg items-center dark:bg-black   ">
            <h1 className="text-2xl mt-2 sm:text-5xl inline-block sm:flex ml-4 sm:mt-6 text-center font-normal text-black dark:text-gray-300">
              00{" "}
              <span className="text-xs text-center mb-2 sm:text-sm sm:flex-row  items-center flex-1 mt-6 sm:mr-10 text-gray-700 dark:text-gray-300">
                Second
              </span>
            </h1>
          </div>
        </div>

        {/* Content Price */}
        <div className="flex mt-4 sm:mt-4 justify-between w-full space-x-2">
          <div className="shadow-lg h-16  flex-1 sm:mr-2 rounded-3xl dark:bg-black   relative flex-row sm:h-20 ">
            <p className="text-xs md:text-sm font-normal  text-gray-700 dark:text-gray-300 absolute top-1 left-4">
              Current Price
            </p>
            <h2 className="text-sm mt-8 dark:text-gray-300 ml-4 md:text-lg font-bold text-center md:mt-10 ">
              LDX = 0.1 BUSD
            </h2>
          </div>
          <div className="shadow-lg flex-1  rounded-3xl dark:bg-black  relative flex-row md:h-20 ">
            <p className="text-xs md:text-sm font-normal text-gray-700 dark:text-gray-300 absolute top-1 left-4">
              Availble LDX
            </p>
            <h2 className="text-sm mt-8 dark:text-gray-300 md:text-lg font-bold text-center md:mt-10">
              6,253,800.679 LDX
            </h2>
          </div>
        </div>
        <div className="flex mt-4 sm:mt-4 justify-between space-x-2">
          <div className="shadow-lg flex-1   rounded-3xl dark:bg-black   relative flex-row h-20 ">
            <p className="text-xs md:text-sm font-normal  text-gray-700 dark:text-gray-300 absolute top-1 left-4">
              LDX Token Sold
            </p>
            <h2 className="text-sm w-full dark:text-gray-300 ml-3 md:text-lg font-bold text-center mt-10 ">
              00,000,000,000 LDX
            </h2>
          </div>
          <div className="shadow-lg flex-1 rounded-3xl dark:bg-black   relative flex-row md:h-20 ">
            <p className="text-xs md:text-sm font-normal text-gray-700 dark:text-gray-300 absolute top-1 left-4">
              LDX Token Sold ($)
            </p>
            <h2 className="text-sm w-full dark:text-gray-300 md:text-lg font-bold text-center mt-10">
              $0,000,000.000 USD
            </h2>
          </div>
        </div>
        {/* ICO Progress */}
        <div className="w-full  mt-2 h-32 p-4  shadow-lg rounded-3xl dark:bg-black sm:mt-5  ">
          <p className=" text-xs md:text-sm font-normal text-center dark:text-gray-300 ">
            ICO Progress
          </p>
          {/* diagram */}
          <div className="w-12/12 mt-2 rounded-3xl h-10 bg-gray-300">
            <div
              className="w-2/5 rounded-3xl h-10 "
              style={{
                background:
                  "linear-gradient(to bottom, #1ec01e, #1dba1d, #1cb31c, #1bad1b, #1aa71a)",
              }}
            >
              <p className="text-sm text-white text-center pt-2">30.98%</p>
            </div>
          </div>

          <div className="relative mt-3 w-12/12">
            <p className=" text-xs md:text-sm text-black dark:text-gray-300  absolute bot-0">
              Avaliable : 8885854.41 LDX
            </p>
            <p className="text-xs md:text-sm text-black dark:text-gray-300  absolute bot-0 right-0">
              Total : 10000000.00 LDX
            </p>
          </div>
        </div>
      </div>

      {/* right Content */}
      <div className="p-4 rounded-xl h-full flex-2 sm:flex-row flex-col text-center content-center sm:mt-0  dark:bg-black shadow-xl">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 sm:items-end space-y-4">
          <div className="flex flex-row space-x-2 ">
            <button className="bg-white dark:bg-gray-800 shadow-xl p-3 flex items-center rounded-xl justify-start space-x-2 w-34 focus:outline-none">
              <img className="w-8 h-8" src={USDT} alt="icon-usdt" />
              <span className="text-base font-semibold text-main-text-dark dark:text-white">
                USDT
              </span>
              <div className="w-5 h-5">
                <img
                  className="w-full h-full"
                  src={arrowDown2}
                  alt="icon-chevronDown"
                />
              </div>
            </button>
          </div>
          <form>
            <div className="flex justify-between pb-2 px-2">
              <span className="text-xs text-main-text-light dark:text-main-text-dark-2 dark:text-white">
                Pay
              </span>
              <span className="text-xs text-main-text-light dark:text-main-text-dark-2 dark:text-white">
                Balance : 0.00
              </span>
            </div>
            <div className="bg-main-light dark:bg-main-comp-dark border border-litedex p-4 flex sm:w-96 rounded-xl items-center space-x-2 flex-row">
              <input
                className="text-base text-gray-400 flex-grow outline-none bg-transparent placeholder-main-text-light-2 dark:placeholder-main-text-dark"
                type="number"
                placeholder="0.00"
              />
              <button className="text-litedex font-bold focus:outline-none text-green-400">
                Max
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-start items-end py-4 ml-14 sm:-mb-8">
          <div className="w-5 h-5">
            <img
              className="w-full h-full animate-bounce"
              src={arrowDown}
              alt="icon-arrowDown"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end space-y-4">
          <div className="flex flex-row space-x-2 ">
            <div className="bg-white dark:bg-gray-800  shadow-xl p-3 flex items-center rounded-xl justify-start space-x-2 w-32">
              <div className="w-8 h-8">
                <img className="w-8 h-8" src={Litedex} alt="icon-usdt" />
              </div>
              <span className="text-base font-semibold text-main-text-dark dark:text-white">
                LDX
              </span>
            </div>
          </div>
          <form>
            <div className="flex justify-between pb-2 px-2">
              <span className="text-xs text-main-text-light dark:text-main-text-dark-2 dark:text-white">
                Get (Estimate)
              </span>
              <span className="text-xs text-main-text-light dark:text-main-text-dark-2 dark:text-white">
                Balance : 0.00
              </span>
            </div>
            <div className="bg-main-light dark:bg-main-comp-dark border border-litedex p-4 flex sm:w-96 rounded-xl items-center space-x-2 flex-row">
              <input
                className="text-base text-gray-400 flex-grow outline-none bg-transparent placeholder-main-text-light-2 dark:placeholder-main-text-dark dark:border-gray-500"
                type="number"
                placeholder="0.00"
              />
            </div>
          </form>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end space-y-4">
          <div className="flex flex-row space-x-2">
            <div className="bg-white dark:bg-main-comp-dark p-3 dark:bg-black hidden sm:flex items-center rounded-xl justify-start space-x-2 w-32">
              <span className="text-sm font-semibold text-main-text-dark dark:text-white">
                Referral Code
              </span>
            </div>
          </div>
          <form>
            <div className="flex justify-start pb-2 px-2 ">
              <span className="text-xs text-main-text-light dark:text-main-text-dark-2 dark:text-white">
                Referral Code (optional)
              </span>
            </div>
            <div className="bg-main-light dark:bg-main-comp-dark border border-litedex p-4 flex sm:w-96 rounded-xl items-center space-x-2 flex-row">
              <input
                className="text-base text-gray-400 flex-grow outline-none bg-transparent placeholder-main-text-light-2 dark:placeholder-main-text-dark dark:border-gray-500"
                type="text"
                placeholder="paste here"
              />
              <button className="text-litedex font-bold focus:outline-none text-green-400">
                Paste
              </button>
            </div>
          </form>
        </div>
        <button
          className="w-full  py-3 mt-8 bg-gradient-to-b from-litedex to-litedex-dark text-center text-white rounded-xl"
          style={{
            background:
              "linear-gradient(to bottom, #1ec01e, #1dba1d, #1cb31c, #1bad1b, #1aa71a)",
          }}
        >
          Connect to Wallet
        </button>
      </div>
    </div>
  );
};

export default TopContent;
