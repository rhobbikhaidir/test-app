import "./styles/tailwind.css";
import USDT from "./assets/usdt.png";
import Litedex from "./assets/litedex.png";
import arrowDown from "./assets/arrowDown.png";
import CoinCard from "./components/CoinCard";
function App() {
  return (
    <div className="block md:flex">
      {/* ----- left Content ------- */}

      {/* ---- right content ---- */}
      {/* <div className="container shadow-lg flex-col rounded-3xl">test</div> */}
      <CoinCard />
    </div>
  );
}

export default App;
