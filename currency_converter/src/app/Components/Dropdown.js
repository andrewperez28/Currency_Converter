"use client";
import currencies from "../Objects/currencies";
import Flag from "./Flag";

export default function Dropdown(props) {
  console.log(
    `DROPDOWN COMPONENT RENDERED! This is Component '${props.label}'`
  );
  const filteredCurrency = props.opposingValue;
  const useStateFunction = props.stateFunction;
  const currenciesObject = currencies();
  const currencyList = Object.keys(currenciesObject).filter(
    (currency) => currency != filteredCurrency
  );

  console.log(`fileteredCurrency is: ${filteredCurrency}`);

  const handleDropSelection = (e) => {
    useStateFunction(e.target.value);
  };

  return (
    <>
      <legend className="text-4xl p-2 mb-4">{props.label}</legend>
      <select
        value={props.selectedValue}
        onChange={(e) => {
          console.log(`e.target.value is: ${e.target.value}`);
          handleDropSelection(e);
        }}
        className="text-black mx-auto p-2 mb-4 text-4xl"
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
      {props.selectedValue in currenciesObject ? (
        <Flag label={props.selectedValue} />
      ) : null}
    </>
  );
}
