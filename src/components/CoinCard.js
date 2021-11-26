import React from "react";
import USDT from "../assets/usdt.png";
import Litedex from "../assets/litedex.png";
import arrowDown from "../assets/arrowDown.png";

const CoinCard = () => {
  return (
    <div className="p-4 rounded-xl h-full flex-1 sm:flex-row flex-col text-center content-center sm:mt-14 bg-white dark:bg-main-dark shadow-xl flex-col sm:flex-row">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 sm:items-end space-y-4">
        <div className="flex flex-row space-x-2">
          <div className="bg-white dark:bg-main-comp-dark shadow-xl p-3 flex items-center rounded-xl justify-start space-x-2 w-34">
            <img className="w-8 h-8" src={USDT} alt="icon-usdt" />
            <span className="text-base font-semibold text-main-text-dark">
              USDT
            </span>
            <div className="w-5 h-5">
              <img
                className="w-full h-full"
                src={arrowDown}
                alt="icon-chevronDown"
              />
            </div>
          </div>
        </div>
        <form>
          <div className="flex justify-between pb-2 px-2">
            <span className="text-xs text-main-text-light dark:text-main-text-dark-2">
              Pay
            </span>
            <span className="text-xs text-main-text-light dark:text-main-text-dark-2">
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
        <div className="w-6 h-6">
          <img
            className="w-full h-full animate-bounce"
            src={arrowDown}
            alt="icon-arrowDown"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end space-y-4">
        <div className="flex flex-row space-x-2">
          <div className="bg-white dark:bg-main-comp-dark shadow-xl p-3 flex items-center rounded-xl justify-start space-x-2 w-34">
            <div className="w-8 h-8">
              <img className="w-8 h-8" src={Litedex} alt="icon-usdt" />
            </div>
            <span className="text-base font-semibold text-main-text-dark">
              LDX
            </span>
          </div>
        </div>
        <form>
          <div className="flex justify-between pb-2 px-2">
            <span className="text-xs text-main-text-light dark:text-main-text-dark-2">
              Get (Estimate)
            </span>
            <span className="text-xs text-main-text-light dark:text-main-text-dark-2">
              Balance : 0.00
            </span>
          </div>
          <div className="bg-main-light dark:bg-main-comp-dark border border-litedex p-4 flex sm:w-96 rounded-xl items-center space-x-2 flex-row">
            <input
              className="text-base text-gray-400 flex-grow outline-none bg-transparent placeholder-main-text-light-2 dark:placeholder-main-text-dark"
              type="number"
              placeholder="0.00"
            />
          </div>
        </form>
      </div>
      <button className="w-full bg-green-400 py-3 mt-8 bg-gradient-to-b from-litedex to-litedex-dark text-center text-white rounded-xl">
        Connect to Wallet
      </button>
    </div>
  );
};

export default CoinCard;
