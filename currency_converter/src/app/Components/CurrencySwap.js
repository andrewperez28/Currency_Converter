import { React } from "react";

function CurrencySwapButton({ onSwap }) {
  return (
    <button
      onClick={onSwap}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py- px-4 rounded-full mt-10"
    >
      Swap Currencies
    </button>
  );
}

export default CurrencySwapButton;
