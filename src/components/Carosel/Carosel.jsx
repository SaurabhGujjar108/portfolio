import React from "react";
import "./Carosel.scss";

const Carosel = ({content}) => {
  return (
    <div className="carosel-container">
      <div className="carosel">{content}</div>
      <div className="carosel-backContainer"></div>
    </div>
  );
};

export default Carosel;
