import logo from "./logo.svg";
import USDT from "./assets/usdt.png";
import Litedex from "./assets/litedex.png";

import "./styles/tailwind.css";
function App() {
  return (
    <div className=" container w-80 md:w-1/2 mx-48 my-24 rounded-lg bg-white h-auto shadow-2xl pt-3 pr-8">
      {/* atas */}
      <div className="text-center m-8 flex mt-16 flex-col md:flex-row">
        <div className="flex flex-row  w-36 h-14 rounded-2xl shadow-xl ">
          <img
            src={USDT}
            alt=""
            className="m-2 flex-row "
            style={{ width: 40, height: 40 }}
          />

          <select
            name="price"
            id="price"
            className="bg-transparent text-black font-bold flex-row focus:outline-none"
          >
            <option value="volvo">USDT</option>
            <option value="saab">USD</option>
            <option value="opel">RP</option>
            <option value="audi">EURO</option>
          </select>
        </div>
        {/* input 1 */}
        <div className="flex-row flex  bg-gray-200 justify-end relative h-14 mt-6 ml-80  rounded-2xl md:w-72 md:ml-20 md:mt-1  ">
          <p className="absolute -top-4 -left-80 md:top-0 md:left-0 md:-mt-5 md:-ml-8 text-xs">
            Pay
          </p>
          <p className="absolute -top-4 right-14 md:top-0 md:right-0 md:-mt-5 md:mr-2 text-xs">
            Balance:0.0
          </p>
          <input
            className="flex-row bg-gray-200 rounded-2xl focus:outline-none pl-6 "
            value="0.00"
            type="number"
          />
          <p className="flex-row text-green-500 uppercase text-base font-bold text-center mt-4  mr-4 ">
            {" "}
            max
          </p>
        </div>
      </div>
      {/* bawah */}

      <div className="text-center m-8 flex md:mt-16 flex-col md:flex-row">
        {/* <div className="w-auto bg-transparent text-center h-24 ml-8 rounded flex flex-col md:flex-row"> */}
        <div className="flex mr-4  md:ml-4 w-36 h-14 rounded-2xl shadow-xl">
          <img
            src={Litedex}
            alt=""
            className="m-2 flex-row "
            style={{ width: 40, height: 40 }}
          />
          <select
            name="price"
            id="price"
            className="bg-transparent text-black font-bold flex-row focus:outline-none"
          >
            <option value="volvo">LDX</option>
            <option value="saab">USD</option>
            <option value="opel">RP</option>
            <option value="audi">EURO</option>
          </select>
        </div>
        {/* input 2 */}
        <div className="flex-row flex pl-8  justify-end relative h-14 ml-60 mt-6 rounded-2xl md:w-72 md:ml-20 md:mt-1  ">
          <p className="absolute -top-4 -left-60 md:top-0 md:left-0 md:-mt-5 md:-ml-8 text-xs">
            Get (estimate)
          </p>
          <p className="absolute -top-4 right-0 md:top-0 md:right-0 md:-mt-5 md:mr-2 text-xs">
            Balance:0.0
          </p>
          <input
            className="flex-row bg-gray-200 rounded-2xl focus:outline-none pl-6  md:pr-12 "
            value="0.00"
            type="number"
          />
          {/* <p className="flex-row text-green-500 uppercase text-base font-bold text-center mt-4  mr-4 ">
            {" "}
            max
          </p> */}
        </div>
      </div>
      <button
        className="w-11/12 h-14 rounded-2xl m-8 text-white btn-connect text-center"
        style={{ backgroundColor: "#00be20" }}
      >
        Connet to Wallet
      </button>
    </div>
  );
}

export default App;
