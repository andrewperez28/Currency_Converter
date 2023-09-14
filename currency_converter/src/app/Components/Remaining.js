import { useEffect } from "react";

export default function Remaining(props) {
  const updateRemaining = props.updateFunction;
  const serverUrl = "http://localhost:3001";

  useEffect(() => {
    fetch(`${serverUrl}/remaining`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error with backend");
        }
        return response.json();
      })
      .then((response) => {
        if (response.remaining !== props.remaining) {
          updateRemaining(parseInt(response));
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <>
      <p>Number of requests remaining: {props.remaining}</p>
    </>
  );
}
