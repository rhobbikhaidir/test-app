import React from "react";
import USDT from "../assets/usdt.png";
import Litedex from "../assets/litedex.png";
import arrowDown from "../assets/arrowdown.svg";
import arrowDown2 from "../assets/arrowSvg.svg";

const CoinCard = () => {
  return (
    <div className="p-4 rounded-xl h-full flex-2 sm:flex-row flex-col text-center content-center sm:mt-0  dark:bg-black shadow-xl">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 sm:items-end space-y-4">
        <div className="flex flex-row space-x-2 ">
          <button className="bg-white dark:bg-main-comp-dark dark:bg-black shadow-xl p-3 flex items-center rounded-xl justify-start space-x-2 w-34 focus:outline-none">
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
          <div className="bg-white dark:bg-main-comp-dark dark:bg-black  shadow-xl p-3 flex items-center rounded-xl justify-start space-x-2 w-32">
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
  );
};

export default CoinCard;
