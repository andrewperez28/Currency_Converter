import { useEffect } from "react";
import getRemaining from "../Scripts/getRemaining.mjs";

export default function Remaining(props) {
  useEffect(() => {
    // Call the getRemaining function and update the remaining state
    const currentRemaining = getRemaining();
    console.log(`CURRENT REMAINING IS: ${currentRemaining}`);
    props.updateFunction(currentRemaining);
  }, []); // Empty dependency array to ensure this effect runs once on mount

  return (
    <>
      <p>Number of Requests Remaining: {props.remaining}</p>
    </>
  );
}
