import React from "react";
import "./LinearProgress.scss";

const LinearProgress = () => {
  return (
    <div
      className="linearProgress"
      style={{
        height: "5px",
        width: "100%",
        backgroundColor: "lightgray",
      }}
    >
      <div
        className="progress-percent"
        style={{
          height: "5px",
          width: "70%",
          backgroundColor: "green",
        }}
      ></div>
    </div>
  );
};

export default LinearProgress;