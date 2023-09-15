import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const envStatus = dotenv.config();
const port = process.env.PORT || 3001;

if (envStatus.error) {
  console.log("THERE IS SOMETHING WRONG WITH THE DOTENV!! ", envStatus.error);
}

const app = express();

const apiKey = process.env.API_KEY;
const freecurrencyapi = new Freecurrencyapi(apiKey);

app.use(cors());

app.get("/remaining", async (req, res) => {
  try {
    const response = await freecurrencyapi.status(apiKey);
    const numRemaining = response.quotas.month.remaining;
    console.log("numRemaining:", numRemaining);
    res.json({ remaining: numRemaining });
  } catch (error) {
    console.error(`ERROR: ${error}`);
    res.status(500).json({ error: "Internal Server Error " });
  }
});

app.get("/exchange", async (req, res) => {
  try {
    const { base, target } = req.query;
    const baseTargetResponse = await freecurrencyapi.latest({
      base_currency: base,
      currencies: target,
    });

    const targetBaseResponse = await freecurrencyapi.latest({
      base_currency: target,
      currencies: base,
    });

    const exchangeArray = [
      baseTargetResponse.data[target],
      targetBaseResponse.data[base],
    ];
    console.log(exchangeArray);
    res.json(exchangeArray);
  } catch (error) {
    console.error(
      "There was something wrong with retrieving exchanges from the API:",
      error
    );
  }
});

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
