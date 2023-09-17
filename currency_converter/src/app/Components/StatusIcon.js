import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { green, yellow, red } from "@mui/material/colors";
export default function StatusIcon(props) {
  if (props.status === "OFFLINE - NO MORE REQUESTS") {
    return (
      <>
        <p>API Status: {props.status}</p>
        <FiberManualRecordIcon sx={{ color: yellow[500] }} />
      </>
    );
  }

  if (props.status === "OFFLINE - API DOWN") {
    return (
      <>
        <p>
          API Status: {props.status}{" "}
          <FiberManualRecordIcon sx={{ color: red[500] }} />
        </p>
      </>
    );
  }
  return (
    <>
      <p>API Status: {props.status}</p>
      <FiberManualRecordIcon sx={{ color: green[500] }} />
    </>
  );
}
