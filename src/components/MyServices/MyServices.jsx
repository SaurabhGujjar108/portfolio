import React from "react";
import Card from "../Card/Card";
import "./MyServices.scss";

const MyServices = () => {
  return (
    <div className="myServices">
      <div className="myServices-header">
        <div className="label">MY SERVICES</div>
        <div className="heading">My Provided Features</div>
      </div>

      <div className="cards">
        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default MyServices;
