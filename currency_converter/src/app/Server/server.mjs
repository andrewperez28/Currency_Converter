import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import express, { response } from "express";
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
  let response; // Declare response in a higher scope

  try {
    response = await freecurrencyapi.status(apiKey);

    if (response.message !== undefined) {
      console.log(
        "There's been an error with the freecurrencyapi API: ",
        response.message
      );
    }

    const numRemaining = response.quotas.month.remaining;
    console.log("numRemaining:", numRemaining);
    res.json({ remaining: numRemaining });
  } catch (error) {
    if (
      response &&
      response.message ===
        "Internal Server Error - let us know: support@freecurrencyapi.com"
    ) {
      res.status(500).json({ error: response.message });
    } else if (
      response &&
      response.message === "Invalid authentication credentials"
    ) {
      res.status(401).json({ error: response.message });
    } else {
      res.status(500).json({ error: "Error with backend" });
    }
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
