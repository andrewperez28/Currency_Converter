import Image from "next/image";
import Dropdown from "./Components/Dropdown";
import PriceEntry from "./Components/PriceEntry";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex justify-center">
          <h1 className="text-8xl p-4">Currency Converter</h1>
        </div>
      </header>

      <div className="flex justify-center">
        <div className="text-center">
          <h2 className="text-4xl p-4">
            Welcome to the currency converter website!{" "}
          </h2>
          <h3 className="text-3xl p-4">
            Please choose a base currency and a target currency to be used for
            conversion. Then enter your prices in at least one input box.
          </h3>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="flex flex-col items-center p-4">
          <Dropdown label="Base Currency" />
          <Image
            src="/Images/usa-flag-medium.jpg"
            layout="intrinsic"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col items-center p-4">
          <Dropdown label="Target Currency" />
          <Image
            src="/Images/canada-flag-medium.jpg"
            layout="intrinsic"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-center p-4">
          <PriceEntry
            label="Base Price"
            id="base"
            name="basePrice"
            className="mb-4 mt-4"
          />
        </div>
        <div className="flex flex-col items-center p-4">
          <PriceEntry
            label="Target Price"
            id="target"
            name="targetPrice"
            className="mb-4 mt-4"
          />
        </div>
      </div>

      <footer className="mt-auto flex justify-center text-1xl">
        © 2023 Andrew Perez
      </footer>
    </>
  );
}
