import React from "react";
import "./ShowCase.scss";
import portfolio from "../../assets/portfolio.jpg";

const ShowCase = () => {
  return (
    <div
      className="showCase"
      style={{
        width: "60%",
        margin: "auto",
      }}
    >
      <div className="myServices-header">
        <div className="label">MY SERVICES</div>
        <div className="heading">My Provided Features</div>
        <ul className="tabs">
          <li>All</li>
          <li>Branding</li>
          <li>Logo</li>
          <li>UI/UX</li>
          <li>Web Design</li>
        </ul>
      </div>

      <div className="cards">
        <div className="row">
          <div>
            <img src={portfolio} alt="img" />
          </div>
          <div>
            <img src={portfolio} alt="img" />
          </div>
          <div>
            <img src={portfolio} alt="img" />
          </div>
        </div>
        <div className="row">
          <div>
            <img src={portfolio} alt="img" />
          </div>
          <div>
            <img src={portfolio} alt="img" />
          </div>
          <div>
            <img src={portfolio} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
