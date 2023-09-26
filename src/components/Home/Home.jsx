import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import avatar from "../../assets/portfolio-avatar.jpg";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <ul className="socailIcons">
        <li className="socailIcons-item">
          <a href="/">
            <FacebookOutlinedIcon />
          </a>
        </li>
        <li className="socailIcons-item">
          <a href="/">
            <TwitterIcon />
          </a>
        </li>
        <li className="socailIcons-item">
          <a href="/">
            <LinkedInIcon />
          </a>
        </li>
      </ul>
      

      <div className="home-containt">
        <div className="home-containt-header">
          <div className="greet">Welcome! I'M</div>
          <div className="name">Rishabh Singh</div>
          <div className="designation">Web Developer & UX Designer</div>
        </div>
        <div className="summary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          dolorum impedit doloribus quas ipsum itaque laudantium eius. Cum, enim
          necessitatibus earum vel iste maxime, officia ipsa sit qui dolor
          voluptas!
        </div>
        <div className="buttons">
          <a href="/" className="hireBtn">
            Hire Me
          </a>
          <a href="/" className="exploreBtn">
            Explore
          </a>
        </div>
      </div>
      <div className="avatarContainer">
        <img src={avatar} alt="avatar" className="avatarImage" />
      </div>
    </div>
  );
};

export default Home;
