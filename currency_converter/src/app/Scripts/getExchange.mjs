import dotenv from "dotenv";
dotenv.config();

import Freecurrencyapi from "@everapi/freecurrencyapi-js";

export default async function getExchange(baseCode, targetCode) {
  const apiKey = process.env.API_KEY;
  const freecurrencyapi = new Freecurrencyapi(apiKey);

  try {
    const response = await freecurrencyapi.latest({
      base_currency: baseCode,
      currencies: targetCode,
    });

    const exchangeValue = response.data[targetCode];
    return exchangeValue;
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}
