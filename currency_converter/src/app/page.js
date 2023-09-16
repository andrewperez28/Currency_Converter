"use client";
import { useEffect, useState } from "react";
import CurrencySwapButton from "./Components/CurrencySwap";
import Dropdown from "./Components/Dropdown";
import PriceEntry from "./Components/PriceEntry";
import Flag from "./Components/Flag";
import Remaining from "./Components/Remaining";
import currencies from "./Objects/currencies";
import getExchange from "./Scripts/getExchange.mjs";

export default function Home() {
  const currenciesObject = currencies();
  console.log("----------------PARENT COMPONENT RENDERED!!!!--------------");
  const [baseSelection, setBaseSelection] = useState("--Select a Currency--");
  const [targetSelection, setTargetSelection] = useState(
    "--Select a Currency--"
  );
  const [basePrice, setBasePrice] = useState("");
  const [targetPrice, setTargetPrice] = useState("");

  const [baseTargetExch, setBaseTargetExch] = useState(0);
  const [targetBaseExch, setTargetBaseExch] = useState(0);

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
    setBasePrice(e.target.value);
  };

  const handleTargetPrice = (e) => {
    setTargetPrice(e.target.value);
  };

  const handleRemaining = (remaining) => {
    setRemaining(remaining - 2);
  };

  useEffect(() => {
    // Update targetPrice when basePrice or exchangeRate changes
    if (updateTargetPrice && basePrice !== "" && baseTargetExch !== "") {
      const calculatedValue =
        Math.round(basePrice * baseTargetExch * 100) / 100;
      setTargetPrice(calculatedValue);
    }
    // Reset the flag
    setUpdateTargetPrice(true);
  }, [basePrice, baseTargetExch, updateTargetPrice]);

  useEffect(() => {
    // Update basePrice when targetPrice or exchangeRate changes
    if (updateBasePrice && targetPrice !== "" && targetBaseExch !== "") {
      const calculatedValue =
        Math.round(targetPrice * targetBaseExch * 100) / 100;
      setBasePrice(calculatedValue);
    }
    // Reset the flag
    setUpdateBasePrice(true);
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
          setBaseTargetExch(baseTargetExch);
          setTargetBaseExch(targetBaseExch);
          handleRemaining(remaining);

          if (basePrice === "" && targetPrice === "") {
            setBasePrice(1);
            setTargetPrice(Math.round(baseTargetExch * 100) / 100);
          } else {
            setTargetPrice(Math.round(basePrice * baseTargetExch * 100) / 100);
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
        <div className="flex flex-col items-center p-4 min-h-16">
          <Dropdown
            label="Base Currency"
            selectedValue={baseSelection}
            opposingValue={targetSelection}
            stateFunction={handleBaseSelection}
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
            value={basePrice}
            className="mb-4 mt-4"
            onChange={handleBasePrice}
          />
        </div>
        <div className="flex flex-col items-center p-4">
          <PriceEntry
            label="Target Price"
            value={targetPrice}
            className="mb-4 mt-4"
            onChange={handleTargetPrice}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Remaining remaining={remaining} />
      </div>

      <footer className="mt-auto flex justify-center text-1xl">
        © 2023 Andrew Perez
      </footer>
    </>
  );
}
