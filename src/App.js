import "./styles/tailwind.css";
import CoinCard from "./components/CoinCard";
function App() {
  return (
    <div className="max-w-sm mr-0 block sm:flex sm:justify-between sm:max-w-full sm:py-16 sm:px-8 py-4 px-4 sm:space-x-8">
      <div className="mb-8  flex-1 flex-col sm:ml-3 sm:flex-row  ">
        {/* content realtime */}
        <div className="flex justify-between space-x-6 w-full ">
          <div className="rounded-3xl  sm:h-20 flex-1 flex-row  shadow-lg ">
            <h1 className=" text-3xl sm:text-5xl flex ml-4 sm:mt-6 text-center font-normal text-black">
              01{" "}
              <span className="text-xs sm:text-sm flex-row flex-1 ml-1 mt-6 sm:mr-12 text-gray-700">
                Day
              </span>
            </h1>
          </div>
          <div className="rounded-3xl  sm:h-20 flex-1 flex-row  shadow-lg ">
            <h1 className=" text-3xl sm:text-5xl flex ml-2 sm:mt-6 text-center font-normal text-black">
              01{" "}
              <span className="text-xs sm:text-sm flex-row  flex-1 ml-1 mt-6 sm:mr-12 text-gray-700">
                Hours
              </span>
            </h1>
          </div>
          <div className="rounded-3xl  sm:h-20 flex-1 flex-row  shadow-lg ">
            <h1 className=" text-3xl sm:text-5xl flex ml-2 sm:mt-6 text-center font-normal text-black">
              00{" "}
              <span className="text-xs sm:text-sm flex-row  flex-1  mt-6 sm:mr-10 text-gray-700">
                Minute
              </span>
            </h1>
          </div>
          <div className="rounded-3xl flex-1 sm:h-20 shadow-lg ">
            <h1 className=" text-3xl sm:text-5xl flex ml-2 sm:mt-6 text-center font-normal text-black">
              00{" "}
              <span className="text-xs sm:text-sm flex-row  flex-1 mt-6 sm:mr-10 text-gray-700">
                Second
              </span>
            </h1>
          </div>
        </div>

        {/* Content Price */}
        <div className="flex mt-9 md:mt-8 justify-between w-full space-x-2">
          <div className="shadow-lg h-16  flex-1 sm:mr-2 rounded-3xl relative flex-row sm:h-20 ">
            <p className="text-xs md:text-sm font-normal  text-gray-700 absolute top-1 left-4">
              Current Price
            </p>
            <h2 className="text-sm mt-8 ml-4 md:text-lg font-bold text-center md:mt-10 ">
              LDX = 0.1 BUSD
            </h2>
          </div>
          <div className="shadow-lg flex-1  rounded-3xl relative flex-row md:h-20 ">
            <p className="text-xs md:text-sm font-normal text-gray-700 absolute top-1 left-4">
              Availble LDX
            </p>
            <h2 className="text-sm mt-8 md:text-lg font-bold text-center md:mt-10">
              6,253,800.679 LDX
            </h2>
          </div>
        </div>
        <div className="flex mt-9 md:mt-8 justify-between space-x-2">
          <div className="shadow-lg flex-1   rounded-3xl relative flex-row h-20 ">
            <p className="text-xs md:text-sm font-normal  text-gray-700 absolute top-1 left-4">
              LDX Token Sold
            </p>
            <h2 className="text-sm w-full ml-3 md:text-lg font-bold text-center mt-10 ">
              00,000,000,000 LDX
            </h2>
          </div>
          <div className="shadow-lg flex-1 rounded-3xl relative flex-row md:h-20 ">
            <p className="text-xs md:text-sm font-normal text-gray-700 absolute top-1 left-4">
              LDX Token Sold ($)
            </p>
            <h2 className="text-sm w-full md:text-lg font-bold text-center mt-10">
              $0,000,000.000 USD
            </h2>
          </div>
        </div>
        {/* ICO Progress */}
        <div className="w-full  mt-2 h-32 p-4  shadow-lg rounded-3xl">
          <p className=" text-xs md:text-sm font-normal text-center ">
            ICO Progress
          </p>
          {/* diagram */}
          <div className="w-12/12 mt-2 rounded-3xl h-10 bg-gray-300">
            <div className="w-2/5 rounded-3xl h-10 bg-green-400">
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

      <CoinCard />
    </div>
  );
}

export default App;
