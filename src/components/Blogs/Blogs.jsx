import React from "react";
import Card from "../Card/Card";
import "./Blogs.scss";
const src =
  "https://media.istockphoto.com/photos/the-sales-department-scores-again-picture-id1291751221?b=1&k=20&m=1291751221&s=170667a&w=0&h=PcMe7k0T31nY5_lGAK_c6Us9g4iwGAIg47OVzthSBpk=";

const Blogs = () => {
  return (
    <div className="myServices">
      <div className="myServices-header">
        <div className="label">BLOG</div>
        <div className="heading">Trendy News Feeds</div>
      </div>

      <div className="cards">
        <div className="row">
          <Card imgSrc={src} />
          <Card imgSrc={src} />
          <Card imgSrc={src} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
