import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { green, yellow, red } from "@mui/material/colors";
export default function StatusIcon(props) {
  if (props.status === "OFFLINE - NO MORE REQUESTS") {
    return (
      <div className="flex items-center">
        <p>API Status: {props.status}</p>
        <FiberManualRecordIcon sx={{ color: yellow[500] }} />
      </div>
    );
  }

  if (props.status === "OFFLINE - API DOWN") {
    return (
      <div className="flex items-center">
        <p>
          API Status: {props.status}{" "}
          <FiberManualRecordIcon sx={{ color: red[500] }} />
        </p>
      </div>
    );
  }
  return (
    <div className="flex items-center">
      <p>API Status: {props.status}</p>
      <FiberManualRecordIcon sx={{ color: green[500] }} />
    </div>
  );
}
