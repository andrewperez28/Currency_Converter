export default function PriceEntry(props) {
  return (
    <>
      <label className="text-3xl mb-4">{props.label} </label>
      <input
        type="number"
        value={props.value}
        inputMode="numeric"
        name={props.name}
        onChange={props.onChange}
        className="h-20 dark:text-white-500 text-5xl text-center w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
         border-black border-2"
      />
    </>
  );
}
