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

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
