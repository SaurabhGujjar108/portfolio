import React from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Card.scss";

const Card = ({ imgSrc }) => {
  return (
    <div className="card">
      <div className="card-badge">
        {imgSrc ? <img src={imgSrc} alg="card-img" /> : <DesignServicesIcon />}
      </div>
      <div className="card-heading">Graphics Designer</div>

      <div className="card-summary">
        <div className="card-lines">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          excepturi quibusdam adipisci incidunt ipsam ad odio, beatae minima
          
        </div>
      </div>
      <div className="card-button">
        <div className="button-text">Know More</div>
        <div className="button-arrow">
          <ArrowRightAltIcon />
        </div>
      </div>
    </div>
  );
};

export default Card;
