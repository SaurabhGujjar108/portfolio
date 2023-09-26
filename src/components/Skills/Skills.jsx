import React from "react";
import LinearProgress from "../LinearProgress/LinearProgress";
import "./Skills.scss";

const Card = () => {
  return (
    <div className="skillCard">
      <div className="card-percent">
        <b>
          95<span style={{ fontSize: "28px" }}>%</span>
        </b>
      </div>
      <LinearProgress />
      <div className="card-title">
        <b>Web Design</b>
      </div>
      <div className="card-description">Html, Css, JQuery</div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <div className="myServices-header">
        <div className="label">Skills</div>
        <div className="heading">My Expertise</div>
        <div className="skills-cards">
          <div
            className="row"
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "50px"
            }}
          >
            <Card />
            <Card />
            <Card />
          </div>

          <div
            className="row"
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              justifyContent: "space-between",
              
            }}
          >
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
