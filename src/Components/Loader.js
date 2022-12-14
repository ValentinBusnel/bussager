import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <div className="loader">
      <CircularProgress color="primary" />
    </div>
  );
}
