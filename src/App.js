import "./styles/tailwind.css";
import USDT from "./assets/usdt.png";
import Litedex from "./assets/litedex.png";
import arrowDown from "./assets/arrowDown.png";
import CoinCard from "./components/CoinCard";
function App() {
  return (
    <div className="max-w-xs sm:max-w-xl mt-20 ml-3 md:ml-3 ">
      {/* content realtime */}
      <div className="flex">
        <div className="rounded-3xl w-1/4 md:h-20 mr-2 md:mr-2 shadow-lg ">
          <h1 className="text-5xl pr-3 flex ml-2 md:mt-6 text-center font-normal text-black">
            00{" "}
            <span className="text-xs md:text-sm flex-row  flex-1 ml-1 mt-6 md:mr-4 text-gray-700">
              Day
            </span>
          </h1>
        </div>
        <div className="rounded-3xl w-1/4 md:h-20 mr-2 md:mr-2 shadow-lg ">
          <h1 className="text-5xl flex ml-2 md:mt-6 text-center font-normal text-black">
            00{" "}
            <span className="text-xs md:text-sm flex-row  flex-1 ml-1 mt-6 md:mr-4 text-gray-700">
              Hours
            </span>
          </h1>
        </div>
        <div className="rounded-3xl w-1/4 md:h-20 mr-2 md:mr-2 shadow-lg ">
          <h1 className="text-5xl flex ml-2 md:mt-6 text-center font-normal text-black">
            00{" "}
            <span className="text-xs md:text-sm flex-row  flex-1  mt-6 md:mr-4 text-gray-700">
              Minute
            </span>
          </h1>
        </div>
        <div className="rounded-3xl w-1/4 md:h-20 mr-0 md:mr-8 shadow-lg ">
          <h1 className="text-5xl flex ml-2 md:mt-6 text-center font-normal text-black">
            00{" "}
            <span className="text-xs md:text-sm flex-row  flex-1 mt-6 md:mr-4 text-gray-700">
              Second
            </span>
          </h1>
        </div>
      </div>

      {/* Content Price */}
      <div className="flex mt-9 md:mt-8">
        <div className="shadow-lg mr-1.5 h-16  w-1/2 sm:mr-2 pr-5 rounded-3xl relative flex-row md:h-20 ">
          <p className="text-xs md:text-sm font-normal  text-gray-700 absolute top-1 left-4">
            Current Price
          </p>
          <h2 className="text-sm mt-8 ml-4 md:text-lg font-bold text-center md:mt-10 ">
            LDX = 0.1 BUSD
          </h2>
        </div>
        <div className="shadow-lg w-1/2 md:mr-4  rounded-3xl relative flex-row md:h-20 ">
          <p className="text-xs md:text-sm font-normal text-gray-700 absolute top-1 left-4">
            Availble LDX
          </p>
          <h2 className="text-sm mt-8 md:text-lg font-bold text-center md:mt-10">
            6,253,800.679 LDX
          </h2>
        </div>
      </div>
      <div className="flex mt-9 md:mt-8">
        <div className="shadow-lg mr-1.5 w-1/2 md:w-1/2 md:mr-2 pr-5 rounded-3xl relative flex-row h-20 ">
          <p className="text-xs md:text-sm font-normal  text-gray-700 absolute top-1 left-4">
            LDX Token Sold
          </p>
          <h2 className="text-sm w-full ml-3 md:text-lg font-bold text-center mt-10 ">
            00,000,000,000 LDX
          </h2>
        </div>
        <div className="shadow-lg w-1/2 md:w-1/2 md:mr-4  rounded-3xl relative flex-row md:h-20 ">
          <p className="text-xs md:text-sm font-normal text-gray-700 absolute top-1 left-4">
            LDX Token Sold ($)
          </p>
          <h2 className="text-sm w-full md:text-lg font-bold text-center mt-10">
            $0,000,000.000 USD
          </h2>
        </div>
      </div>
      {/* ICO Progress */}
      <div className="w-12/12 mr-4 mt-2 h-32 p-4  shadow-lg rounded-3xl">
        <p className=" text-xs md:text-sm font-normal text-center ">
          ICO Progress
        </p>
        {/* diagram */}
        <div className="w-12/12 mt-2 rounded-3xl h-10 bg-gray-300">
          <div
            className="w-2/5 rounded-3xl h-10"
            style={{
              background:
                "linear-gradient(to bottom, #1ec01e, #1dba1d, #1cb31c, #1bad1b, #1aa71a)",
            }}
          >
            <p className="text-sm text-white text-center pt-2">30.98%</p>
          </div>
        </div>

        <div className="relative mt-3 w-12/12">
          <p className=" text-xs md:text-sm text-black  absolute bot-0">
            Avaliable : 8885854.41 LDX
          </p>
          <p className="text-xs md:text-sm text-black  absolute bot-0 right-0">
            Total : 10000000.00 LDX
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
