export default function checkExchangeCall(baseSelection, targetSelection) {
  if (
    baseSelection != "--Select a Currency--" &&
    targetSelection != "--Select a Currency--"
  ) {
    console.log(
      "API IS BEING CALLED!!!! baseSelection and targetSelection are not empty!"
    );
  } else {
    console.log(
      "API is NOT being called. Either baseSelection or targetSelection is empty or both are empty."
    );
  }
}
