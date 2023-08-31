export default function PriceEntry(props) {
  return (
    <>
      <label className="text-3xl mb-4">{props.label} </label>
      <input
        type="number"
        inputMode="numeric"
        id={props.id}
        name={props.name}
        className="w-full h-20 text-black text-5xl text-center"
      />
    </>
  );
}
