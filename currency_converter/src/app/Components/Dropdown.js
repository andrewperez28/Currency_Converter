"use client";
import { useState } from "react";
import currencies from "../Objects/currencies";
import Flag from "./Flag";

export default function Dropdown(props) {
  const [dropSelection, setDropSelection] = useState("");
  const filteredCurrency = props.selectedValue;
  const useStateFunction = props.stateFunction;
  const currenciesObject = currencies();
  const currencyList = Object.keys(currenciesObject).filter(
    (currency) => currency != filteredCurrency
  );

  console.log(`fileteredCurrency is: ${filteredCurrency}`);

  const handleDropSelection = (e) => {
    setDropSelection(e.target.value);
    useStateFunction(e);
  };

  return (
    <>
      <legend className="text-4xl p-2 mb-4">{props.label}</legend>
      <select
        onChange={(e) => {
          handleDropSelection(e);
        }}
        className="text-black mx-auto p-2 mb-4 text-4xl"
      >
        <option value="" className="text-center">
          --Select a Currency--
        </option>
        {currencyList.map((val) => (
          <option key={val} value={val} className="text-center">
            {val}
          </option>
        ))}
      </select>
      {dropSelection in currenciesObject ? (
        <Flag label={dropSelection} />
      ) : null}
    </>
  );
}
