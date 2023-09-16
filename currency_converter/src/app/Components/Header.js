export default function Header() {
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
            You must choose a base currency and a target currency to be used for
            conversion before you can enter prices. Once currencies have been
            selected, enter your price in one of the boxes. Only numbers are
            allowed.
          </h3>
          <h3 className="text-3xl p-4">
            Press the "Swap Currencies" button if you wish to swap the base
            currency and target currency.
          </h3>
        </div>
      </div>
    </>
  );
}
