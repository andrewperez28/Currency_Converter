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
        className="h-20 text-black text-5xl text-center appearance-none w-full"
      />
    </>
  );
}
