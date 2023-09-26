import React from "react";
import CircularProgress from "../CircularProgress/CircularProgress";
import "./SkillPercent.scss";

const SkillPercent = () => {
  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "100px",
      }}
    >
      <CircularProgress label={"HTML"} value={85} />
      <CircularProgress label={"CSS"} value={75} />
      <CircularProgress label={"Javascript"} value={80} />
      <CircularProgress label={"ExpressJs"} value={70} />
    </div>
  );
};

export default SkillPercent;
