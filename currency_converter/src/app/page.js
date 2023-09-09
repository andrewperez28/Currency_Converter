"use client";
import { useState } from "react";
import CurrencySwapButton from "./Components/CurrencySwap";
import Dropdown from "./Components/Dropdown";
import PriceEntry from "./Components/PriceEntry";
import Flag from "./Components/Flag";
import currencies from "./Objects/currencies";

export default function Home() {
  const currenciesObject = currencies();
  console.log("----------------PARENT COMPONENT RENDERED!!!!--------------");
  const [baseSelection, setBaseSelection] = useState();
  const [targetSelection, setTargetSelection] = useState();
  const [swap, setSwap] = useState(0);
  const [basePrice, setBasePrice] = useState();
  const [targetPrice, setTargetPrice] = useState();

  console.log(`baseSelection is: ${baseSelection}`);
  console.log(`targetSelection is: ${targetSelection}`);

  const handleBaseSelection = (e) => {
    console.log(`e of handleBaseSelection is: ${e}`);
    setBaseSelection(e);
  };

  const handleTargetSelection = (e) => {
    setTargetSelection(e);
  };

  const handleSwap = () => {
    setSwap((swap) => swap + 1);
  };

  const handleCurrencySwap = () => {
    console.log("SWAP ACTIVATED!!!");
    setBaseSelection(targetSelection);
    setTargetSelection(baseSelection);
    handleSwap();
  };

  const handleBasePrice = (e) => {
    setBasePrice(e);
  };

  const handleTargetPrice = (e) => {
    setTargetPrice(e);
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
          <p>Number of times "Swap Currencies" has been pressed: {swap}</p>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="flex flex-col items-center p-4 min-h-16">
          <Dropdown
            label="Base Currency"
            selectedValue={baseSelection}
            opposingValue={targetSelection}
            stateFunction={handleBaseSelection}
            swap={swap}
          />
          <div className="flex flex-col items-center p-4">
            {baseSelection in currenciesObject ? (
              <Flag label={baseSelection} />
            ) : null}
          </div>
        </div>

        <div className="flex items-center p-4 min-h-16">
          <CurrencySwapButton
            onSwap={handleCurrencySwap}
            className="w-24 h-12"
          />
        </div>

        <div className="flex flex-col items-center p-4 min-h-16">
          <Dropdown
            label="Target Currency"
            selectedValue={targetSelection}
            opposingValue={baseSelection}
            stateFunction={handleTargetSelection}
            swap={swap}
          />
          <div className="flex flex-col items-center p-4">
            {targetSelection in currenciesObject ? (
              <Flag label={targetSelection} />
            ) : null}
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
            onChange={handleBasePrice}
          />
        </div>
        <div className="flex flex-col items-center p-4">
          <PriceEntry
            label="Target Price"
            id="target"
            name="targetPrice"
            className="mb-4 mt-4"
            onChange={handleTargetPrice}
          />
        </div>
      </div>

      <footer className="mt-auto flex justify-center text-1xl">
        © 2023 Andrew Perez
      </footer>
    </>
  );
}
