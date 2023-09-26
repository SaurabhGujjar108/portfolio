import React from "react";
import avatar from "../../assets/portfolio-avatar.jpg";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="image-container">
        <img src={avatar} alt="about img" width="400px" className="about-image" />
      </div>
      <div className="about-content">
        <div className="label">ABOUT ME</div>
        <div className="title">Why hire me for your next project</div>
        <div className="summary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, ea
          maxime sed placeat praesentium commodi accusamus suscipit nulla
          distinctio vitae quam nihil magni molestias, quos enim eaque. Culpa,
          dignissimos excepturi!
        </div>
        <div className="button">Download CV</div>
      </div>
    </div>
  );
};

export default About;
