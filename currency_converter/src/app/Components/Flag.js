import Image from "next/image";
import currencies from "../Objects/currencies";

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
        alt={`Flag of ${flagOption}`}
      />
    </>
  );
}
