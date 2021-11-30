import React, { useEffect, useState } from "react";
import BNB from "./assets/BNB.png";
import coinLitedex from "./assets/coin-litedex.jpg";
import TopContent from "./components/Organisms/topContent";
import "./styles/tailwind.css";
import copyIcon from "./assets/copy-btn.svg";
function App() {
  const [theme, setTheme] = useState(true);
  const handleChangeTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", theme);
    const html = document.querySelector("html");

    if (theme) {
      html.classList.remove("dark");
      html.classList.add("light");
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
    }
  };

  useEffect(() => {
    if (theme) {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
    } else {
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add("dark");
    }
  });
  return (
    <div className="dark:bg-gray-700 h-full">
      <div className="flex items-center ">
        <div className="flex flex-row items-end shadow-lg rounded-xl px-4 py-2 bg-white dark:bg-gray-900">
          <p className="text-lg text-gray-600 flex-row">Switcher</p>
          <div className="flex-row px-2">
            <button
              onClick={handleChangeTheme}
              className={`${
                theme ? "bg-black" : "bg-white "
              }  rounded-full focus:outline-none w-4 h-4 mr-2 flex-row`}
            ></button>
          </div>
        </div>
      </div>
      <TopContent />

      {/* content Bot */}
      <div className="max-w-sm mr-0 flex-col-reverse sm:flex-row-reverse  sm:flex sm:justify-between sm:max-w-full sm:py-16 sm:px-8 py-4 px-4 sm:space-x-4">
        <div className="mb-8 flex-1  flex flex-wrap content-center  sm:ml-3 sm:mt-16">
          {/* content realtime */}

          <div className="px-4 py-4 rounded-2xl space-y-6 ">
            <p className="text-4xl flex-col text-center font-light  text-black">
              What is <span className="font-bold">Referral</span>
            </p>
            <p className="text-sm sm:text-2xl">
              A referral code is a collection of digits consisting of letters
              and numbers that usually presents a unique code. The code is
              usually written with numbers, letters, or a combination of letters
              and numbers. Usually, this code is used to attract more new users
              from an app or platform.
            </p>
          </div>
        </div>

        {/* Left Content */}
        <div className="mb-8 flex-1 sm:ml-3  flex flex-col space-y-6  ">
          <p className="text-4xl mb-6 text-center font-light text-black">
            Account Portfolio
          </p>
          {/* content realtime */}

          <div className=" shadow-xl px-4 py-4 rounded-2xl ">
            <p className="text-sm text-black">Total Claimed :</p>
            <div className="flex-row mt-2 flex items-center">
              <img src={coinLitedex} alt="" className="w-7 h-7 rounded-full" />
              <p className="text-2xl font-bold mx-2"> 150 LDX +</p>
              <img src={BNB} alt="" className="w-7 h-7 rounded-full" />
              <p className="text-2xl font-bold ml-2"> 0.5 USDT </p>
              <p className="text-sm font-sm ml-2"> = 100 USDT</p>
            </div>
            <p className="text-sm text-black mt-2 ">Balance LDX</p>
            <div className="flex-row mt-2 flex items-center">
              <img src={coinLitedex} alt="" className="w-7 h-7 rounded-full" />
              <p className="text-2xl font-bold mx-2"> 1500 LDX </p>
            </div>
          </div>

          {/* Content Price */}
          <div className=" shadow-2xl px-4 py-4 rounded-2xl space-y-4">
            <p className="text-sm text-black">Referral :</p>
            <div className="bg-gray-300 px-4 py-4 flex flex-col rounded-xl space-y-6">
              <div className="text-center">
                <p className="text-sm font-bold mb-2">Copy ID</p>
                <div className="bg-white rounded-2xl flex flex-row py-2">
                  <button className="w-full relative">
                    {"0xD316"}
                    <img
                      src={copyIcon}
                      alt=""
                      className="w-7 h-7 absolute right-4  -top-0.5"
                    />
                  </button>
                  {/* <img src={copyIcon} alt="" className="w-7 h-7" /> */}
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold mb-2">Copy Link</p>
                <div className="bg-white rounded-2xl flex flex-row py-2">
                  <button className="w-full relative">
                    https://token.litedex.io/0xD315
                    <img
                      src={copyIcon}
                      alt=""
                      className="w-7 h-7 absolute right-4  -top-0.5"
                    />
                  </button>
                  {/* <img src={copyIcon} alt="" className="w-7 h-7" /> */}
                </div>
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="flex-1">
                <p className="text-sm text-black">Total Invite :</p>
                <p className="text-lg font-bold ">10 User</p>
              </div>
              <div className="flex-1 space-y-2 ">
                <p className="text-sm text-black">Total Invite :</p>
                <div className="flex flex-row space-x-2">
                  {" "}
                  <img
                    src={coinLitedex}
                    alt="icon coinLdx"
                    className="w-8 h-8 rounded-full"
                  />{" "}
                  <p className="text-lg font-bold ">150 LDX</p>
                </div>
                <div className="flex flex-row space-x-2">
                  {" "}
                  <img
                    src={BNB}
                    alt="icon coinLdx"
                    className="w-8 h-8 rounded-full"
                  />{" "}
                  <p className="text-lg font-bold ">0.5 USDT</p>
                </div>{" "}
              </div>
            </div>

            {/* button claimed */}
            <div className="text-center space-y-2 pt-4">
              <p className="text-sm  font-bold">Claim your referral</p>
              <button
                className="rounded-2xl text-white px-10 py-2"
                style={{
                  background:
                    "linear-gradient(to bottom, #1ec01e, #1dba1d, #1cb31c, #1bad1b, #1aa71a)",
                }}
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
