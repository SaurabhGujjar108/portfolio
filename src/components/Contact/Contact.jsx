import React from "react";
import Card from "../Card/Card";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import "./Contact.scss";

const src =
  "https://media.istockphoto.com/photos/the-sales-department-scores-again-picture-id1291751221?b=1&k=20&m=1291751221&s=170667a&w=0&h=PcMe7k0T31nY5_lGAK_c6Us9g4iwGAIg47OVzthSBpk=";

const Contact = () => {
  return (
    <div className="myServices">
      <div className="myServices-header">
        <div className="label">CONTACT ME</div>
        <div className="heading">Send Me A Message</div>
      </div>

      <div className="cards">
        <div className="row">
          <Input placeholder={"Name"} type={"text"} />
          <Input placeholder={"Email"} type={"email"} />
        </div>
        <div className="row">
          <Input placeholder={"Phone"} type={"phone"} />
          <Input placeholder={"Budget"} type={"number"} />
        </div>
        <div className="row">
          <TextArea />
        </div>
      </div>
      <div className="button">Send Message</div>
    </div>
  );
};

export default Contact;
