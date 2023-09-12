import dotenv from "dotenv";
dotenv.config();

import Freecurrencyapi from "@everapi/freecurrencyapi-js";

export default async function getRemaining() {
  const apiKey = process.env.API_KEY;
  console.log(`API KEY is: ${process.env.API_KEY}`);
  const freecurrencyapi = new Freecurrencyapi(apiKey);

  try {
    const response = await freecurrencyapi.status(apiKey);
    return response.quotas.month.remaining;
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}
