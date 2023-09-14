import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import dotenv from "dotenv";
const result = dotenv.config();

if (result.error) {
  console.log("YOU HAVE AN ERROR: ", result.error);
}

export default async function getRemaining() {
  const apiKey = process.env.API_KEY;
  console.log(`API KEY is: ${process.env.API_KEY}`);
  const freecurrencyapi = new Freecurrencyapi(apiKey);

  try {
    const response = await freecurrencyapi.status(apiKey);
    console.log(response.quotas.month.remaining);
    return response.quotas.month.remaining;
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}
