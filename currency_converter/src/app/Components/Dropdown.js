"use client";
import { useState } from "react";
import currencies from "../Objects/currencies";
import Flag from "./Flag";

export default function Dropdown(props) {
  const [selection, setSelection] = useState("");
  const currenciesObject = currencies();
  const currencyList = Object.keys(currenciesObject);

  const handleSelection = (e) => {
    setSelection(e.target.value);
  };

  return (
    <>
      <legend className="text-4xl p-2 mb-4">{props.label}</legend>
      <select
        onChange={handleSelection}
        className="text-black mx-auto p-2 mb-4 text-4xl"
      >
        <option value="" className="text-center">
          --Select a Currency--
        </option>
        {currencyList.map((val) => (
          <option value={val} className="text-center">
            {val}
          </option>
        ))}
      </select>
      {selection in currenciesObject ? <Flag label={selection} /> : null}
    </>
  );
}
