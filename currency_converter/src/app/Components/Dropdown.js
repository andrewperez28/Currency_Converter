"use client";
import currencies from "../Objects/currencies";

export default function Dropdown(props) {
  const filteredCurrency = props.opposingValue;
  const useStateFunction = props.stateFunction;
  const currenciesObject = currencies();
  const currencyList = Object.keys(currenciesObject).filter(
    (currency) => currency != filteredCurrency
  );

  const handleDropSelection = (e) => {
    useStateFunction(e.target.value);
  };

  return (
    <>
      <legend className="text-4xl p-2 mb-4">{props.label}</legend>
      <select
        value={props.selectedValue || ""}
        onChange={(e) => {
          handleDropSelection(e);
        }}
        className="mx-auto p-2 mb-4 text-4xl border-black border-2 dark:text-white-500"
      >
        <option value={null} className="text-center">
          --Select a Currency--
        </option>
        {currencyList.map((val) => (
          <option key={val} value={val} className="text-center">
            {val}
          </option>
        ))}
      </select>
    </>
  );
}
