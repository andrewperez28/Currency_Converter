import currencies from "../Objects/currencies";
import Image from "next/image";

export default function Flag(props) {
  const currenciesObject = currencies();
  const selectedCurrency = props.label;
  const flagOption = currenciesObject[selectedCurrency][1];

  return (
    <>
      <Image
        src={`/Images/${flagOption}-flag-medium.jpg`}
        width={400}
        height={400}
      />
    </>
  );
}
