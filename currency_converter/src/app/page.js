"use client";
import { useState } from "react";
import CurrencySwapButton from "./Components/CurrencySwap";
import Dropdown from "./Components/Dropdown";
import PriceEntry from "./Components/PriceEntry";

export default function Home() {
  const [baseSelection, setBaseSelection] = useState("");
  const [targetSelection, setTargetSelection] = useState("");

  console.log(`Base Selection is: ${baseSelection}`);
  console.log(`Target Selection is: ${targetSelection}`);

  const handleBaseSelection = (e) => {
    setBaseSelection(e.target.value);
  };

  const handleTargetSelection = (e) => {
    setTargetSelection(e.target.value);
  };

  const handleCurrencySwap = () => {
    setBaseSelection(targetSelection);
    setTargetSelection(baseSelection);
  };

  return (
    <>
      <header>
        <div className="flex justify-center">
          <h1 className="text-8xl p-4">Currency Converter</h1>
        </div>
      </header>

      <div className="flex justify-center">
        <div className="text-center">
          <h2 className="text-4xl p-4">
            Welcome to the currency converter website!{" "}
          </h2>
          <h3 className="text-3xl p-4">
            Please choose a base currency and a target currency to be used for
            conversion. Then enter your prices in at least one input box.
          </h3>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="flex flex-col items-center p-4">
          <Dropdown
            label="Base Currency"
            selectedValue={targetSelection}
            stateFunction={handleBaseSelection}
          />
        </div>
        <div className="flex items-center p-4">
          <CurrencySwapButton onSwap={handleCurrencySwap} />
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="flex flex-col items-center p-4">
            <Dropdown
              label="Target Currency"
              selectedValue={baseSelection}
              stateFunction={handleTargetSelection}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-center p-4">
          <PriceEntry
            label="Base Price"
            id="base"
            name="basePrice"
            className="mb-4 mt-4"
          />
        </div>
        <div className="flex flex-col items-center p-4">
          <PriceEntry
            label="Target Price"
            id="target"
            name="targetPrice"
            className="mb-4 mt-4"
          />
        </div>
      </div>

      <footer className="mt-auto flex justify-center text-1xl">
        © 2023 Andrew Perez
      </footer>
    </>
  );
}
