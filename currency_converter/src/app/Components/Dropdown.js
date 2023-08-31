import currencies from "../Objects/currencies";

export default function Dropdown(props) {
  const currenciesObject = currencies();
  const currencyList = Object.keys(currenciesObject);
  return (
    <>
      <legend className="text-4xl p-2 mb-4">{props.label}</legend>
      <select className="text-black mx-auto p-2 mb-4 text-4xl">
        <option value="">--Select a Currency--</option>
        {currencyList.map((val) => (
          <option value={val}>{val}</option>
        ))}
      </select>
    </>
  );
}
