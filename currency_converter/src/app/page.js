import Dropdown from "./Components/Dropdown";

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
            Please choose a base currency and a target currency used for
            conversion.
          </h3>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="flex flex-col items-center p-4">
          <Dropdown label="Base Currency" />
        </div>
        <div className="flex flex-col items-center p-4">
          <Dropdown label="Target Currency" />
        </div>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="border rounded p-2 text-4xl">
          Convert!
        </button>
      </div>
      <footer className="mt-auto flex justify-center text-1xl">
        © 2023 Andrew Perez
      </footer>
    </>
  );
}
