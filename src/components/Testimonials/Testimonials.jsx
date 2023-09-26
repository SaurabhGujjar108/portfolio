import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import "./Testimonials.scss";

function Testimonials(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <div className="testimonials">
      <div className="myServices-header">
        <div className="label">Testimonials</div>
        <div className="heading">What People Says</div>
      </div>

      <Carousel
        className="carousel"
        animation={"slide"}
        swipe={true}
        autoPlay={false}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item({ item }) {
  return (
    <div className="tesimonial-content">
      <FormatQuoteRoundedIcon />
      <p className="testimonial-text">{item.description}</p>
      <div>
        <div className="name">Rishabh Singh</div>
        <div className="designation">CEO, RISH INDRUSTRY</div>
      </div>
    </div>
  );
}
export default Testimonials;
