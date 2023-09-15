import currencies from "../Objects/currencies";

export default function getExchange(currentBase, currentTarget) {
  return new Promise((resolve, reject) => {
    console.log(`currentBase is: ${currentBase}`);
    const currenciesObject = currencies();
    const baseCode = currenciesObject[currentBase][0];
    const targetCode = currenciesObject[currentTarget][0];

    console.log(`baseCode is: ${baseCode}`);
    console.log(`targetCode is: ${targetCode}`);

    fetch(
      `http://localhost:3001/exchange?base=${baseCode}&target=${targetCode}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error with backend");
        }
        return response.json();
      })
      .then((response) => {
        // Resolve the promise with the array containing the two elements
        resolve(response);
      })
      .catch((error) => {
        // Reject the promise with an error if there's an issue
        reject(error);
      });
  });
}
