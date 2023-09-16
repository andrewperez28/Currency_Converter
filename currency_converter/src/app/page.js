"use client";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import CurrencySwapButton from "./Components/CurrencySwap";
import Dropdown from "./Components/Dropdown";
import PriceEntry from "./Components/PriceEntry";
import Flag from "./Components/Flag";
import Remaining from "./Components/Remaining";
import Disclaimer from "./Components/Disclaimer";
import currencies from "./Objects/currencies";
import getExchange from "./Scripts/getExchange.mjs";
import BigNumber from "bignumber.js";

export default function Home() {
  const currenciesObject = currencies();
  console.log("----------------PARENT COMPONENT RENDERED!!!!--------------");
  const [baseSelection, setBaseSelection] = useState("--Select a Currency--");
  const [targetSelection, setTargetSelection] = useState(
    "--Select a Currency--"
  );
  const [basePrice, setBasePrice] = useState(new BigNumber(0));
  const [targetPrice, setTargetPrice] = useState(new BigNumber(0));

  const [baseTargetExch, setBaseTargetExch] = useState(new BigNumber(0));
  const [targetBaseExch, setTargetBaseExch] = useState(new BigNumber(0));

  const [remaining, setRemaining] = useState("Loading...");

  // State variables to control when each useEffect should run
  const [updateBasePrice, setUpdateBasePrice] = useState(true);
  const [updateTargetPrice, setUpdateTargetPrice] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/remaining")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error with backend");
        }
        return response.json();
      })
      .then((response) => {
        setRemaining(response.remaining); // Set the remaining value in the state
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []); // Empty dependency array to fetch once on component mount

  console.log(`baseSelection is: ${baseSelection}`);
  console.log(`targetSelection is: ${targetSelection}`);

  console.log(`basePrice: ${basePrice}`);
  console.log(`targetPrice: ${targetPrice}`);

  const handleBaseSelection = (e) => {
    setBaseSelection(e);
  };

  const handleTargetSelection = (e) => {
    setTargetSelection(e);
  };

  const handleCurrencySwap = () => {
    console.log("SWAP ACTIVATED!!!");
    setBaseSelection(targetSelection);
    setTargetSelection(baseSelection);
  };

  const handleBasePrice = (e) => {
    const newValue = new BigNumber(e.target.value);
    setBasePrice(newValue);

    // Update the targetPrice when basePrice changes
    if (!newValue.isNaN() && !baseTargetExch.isNaN()) {
      const calculatedValue = newValue
        .multipliedBy(baseTargetExch)
        .decimalPlaces(2);
      setTargetPrice(calculatedValue);
    }
  };

  const handleTargetPrice = (e) => {
    const newValue = new BigNumber(e.target.value);
    setTargetPrice(newValue);

    // Update the basePrice when targetPrice changes
    if (!newValue.isNaN() && !targetBaseExch.isNaN()) {
      const calculatedValue = newValue
        .multipliedBy(targetBaseExch)
        .decimalPlaces(2);
      setBasePrice(calculatedValue);
    }
  };

  useEffect(() => {
    // Update targetPrice when basePrice or baseTargetExch changes
    if (updateTargetPrice && !basePrice.isNaN() && !baseTargetExch.isNaN()) {
      const calculatedValue = basePrice
        .multipliedBy(baseTargetExch)
        .decimalPlaces(2);
      setTargetPrice(calculatedValue);
    }
    // Reset the flag
    setUpdateTargetPrice(false); // Make sure to set it to `false` to prevent further updates
  }, [basePrice, baseTargetExch, updateTargetPrice]);

  useEffect(() => {
    // Update basePrice when targetPrice or targetBaseExch changes
    if (updateBasePrice && !targetPrice.isNaN() && !targetBaseExch.isNaN()) {
      const calculatedValue = targetPrice
        .multipliedBy(targetBaseExch)
        .decimalPlaces(2);
      setBasePrice(calculatedValue);
    }
    // Reset the flag
    setUpdateBasePrice(false); // Make sure to set it to `false` to prevent further updates
  }, [targetPrice, targetBaseExch, updateBasePrice]);

  useEffect(() => {
    const fetchExchangeData = async () => {
      if (
        baseSelection !== "--Select a Currency--" &&
        targetSelection !== "--Select a Currency--"
      ) {
        console.log("WE'RE CALLING THE API!!!!!!!!");
        try {
          const [baseTargetExch, targetBaseExch] = await getExchange(
            baseSelection,
            targetSelection
          );
          setBaseTargetExch(new BigNumber(baseTargetExch));
          setTargetBaseExch(new BigNumber(targetBaseExch));
          setRemaining((prevRemaining) => prevRemaining - 2);

          // Check if both basePrice and targetPrice are not equal to zero
          if (!basePrice.isEqualTo(0) && !targetPrice.isEqualTo(0)) {
            // Update only targetPrice to be basePrice * baseTargetExch
            const updatedTargetPrice = basePrice
              .multipliedBy(baseTargetExch)
              .decimalPlaces(2);
            setTargetPrice(updatedTargetPrice);
          } else {
            // If either basePrice or targetPrice is zero, update them with initial values
            const initialBasePrice = new BigNumber(1);
            const initialTargetPrice = initialBasePrice
              .multipliedBy(baseTargetExch)
              .decimalPlaces(2);
            setBasePrice(initialBasePrice);
            setTargetPrice(initialTargetPrice);
          }
        } catch (error) {
          // Handle any errors that may occur during the fetch
          console.error(error);
        }
      }
    };

    fetchExchangeData();
  }, [baseSelection, targetSelection]);

  console.log("baseTargetExch: ", baseTargetExch);
  console.log("targetBaseExch: ", targetBaseExch);

  return (
    <>
      <Header />

      <div className="flex justify-around">
        <div className="flex flex-col items-center p-4 min-h-16">
          <Dropdown
            label="Base Currency"
            selectedValue={baseSelection}
            opposingValue={targetSelection}
            stateFunction={handleBaseSelection}
          />
          {baseSelection in currenciesObject && (
            <div className="flex flex-col items-center p-2">
              <Flag label={baseSelection} />
            </div>
          )}
        </div>

        <div className="flex flex-col items-center p-4 min-h-16">
          <Dropdown
            label="Target Currency"
            selectedValue={targetSelection}
            opposingValue={baseSelection}
            stateFunction={handleTargetSelection}
          />
          {targetSelection in currenciesObject && (
            <div className="flex flex-col items-center p-2">
              <Flag label={targetSelection} />
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        {!baseTargetExch.isEqualTo(0) && !targetBaseExch.isEqualTo(0) ? (
          <>
            <div className="flex flex-col items-center p-4 min-h-16">
              <PriceEntry
                label="Base Price"
                value={basePrice}
                className="mb-4 mt-4"
                onChange={handleBasePrice}
              />
            </div>
            <div className="flex items-center p-4 min-h-16">
              <CurrencySwapButton onSwap={handleCurrencySwap} />
            </div>
            <div className="flex flex-col items-center p-4 min-h-16">
              <PriceEntry
                label="Target Price"
                value={targetPrice}
                className="mb-4 mt-4"
                onChange={handleTargetPrice}
              />
            </div>
          </>
        ) : null}
      </div>
      <div className="flex justify-center p-4 mt-4 mb-4">
        <Remaining remaining={remaining} />
      </div>
      <div className="justify-center">
        <Disclaimer />
      </div>
      <footer className="flex justify-center text-1xl p-4 mt-4 mb-4">
        © 2023 Andrew Perez
      </footer>
    </>
  );
}
