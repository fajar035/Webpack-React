import React from "react";
import "../styles/loading.css";

function Loading() {
  return (
    <div className="body-spinner">
      <div className="feeder">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
