import React, { useEffect } from "react";
import CoinCard from "./components/CoinCard";
import "./styles/tailwind.css";
function App() {
  const handleChangeTheme = (value) => {
    localStorage.setItem("theme", value);
    const html = document.querySelector("html");

    if (value === "dark") {
      html.classList.remove("light");
    } else {
      html.classList.remove("dark");
    }
    html.classList.add(localStorage.getItem("theme"));
  };

  useEffect(() => {
    document.querySelector("html").classList.add(localStorage.getItem("theme"));
  });
  return (
    <div className="dark:bg-gray-700 ">
      <div className="flex items-center ">
        <div className="flex flex-row items-end shadow-lg rounded-xl px-4 py-2 bg-white dark:bg-gray-900">
          <p className="text-lg text-gray-600 flex-row">Switcher</p>
          <div className="flex-row px-2">
            <button
              onClick={() => handleChangeTheme("light")}
              className="bg-gray-400 rounded-full focus:outline-none w-4 h-4 mr-2 flex-row"
            ></button>
            <button
              onClick={() => handleChangeTheme("dark")}
              className="bg-black rounded-full focus:outline-none w-4 h-4 flex-row"
            ></button>
          </div>
        </div>
      </div>

      <div className="max-w-sm mr-0 block sm:flex sm:justify-between sm:max-w-full sm:py-16 sm:px-8 py-4 px-4 sm:space-x-4">
        <div className="mb-8  flex-1 flex-col sm:ml-3 sm:flex-row  ">
          {/* content realtime */}
          <div className="flex justify-between space-x-0.5 sm:space-x-5 max-w-xs sm:w-full ">
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

        <CoinCard />
      </div>
    </div>
  );
}

export default App;
