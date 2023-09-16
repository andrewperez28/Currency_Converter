export default function Disclaimer() {
  return (
    <>
      <h2>
        <bold>
          <i>Disclaimer</i>
        </bold>
      </h2>
      <li>
        This website relies on the{" "}
        <a href="https://freecurrencyapi.com">
          <u>
            <i>freecurrencyapi.com</i>
          </u>
        </a>{" "}
        API in order to receive currency exchange rates.
      </li>
      <li>
        Only 5000 requests are allowed on this website due to the use of the
        free tier of the freecurrency.com API. Selecting new currency and
        swapping currencies both count as a 2 requests. Once the API is called,
        the number of requests will update in real time.
      </li>
      <li>
        When the number of requests remaining reaches 0, the website will not be
        functional until the requests alloted are renewed. This renewal occurs
        on a monthly basis.
      </li>
      <li>Flags are displayed using their native aspect ratios.</li>
    </>
  );
}
