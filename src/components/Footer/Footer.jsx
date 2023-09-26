import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="logo">
          <a href="/">
            Port<span>folio</span>
          </a>
        </div>
        <div className="footer-funnyQuote">
          <h2>I am fucking genius apart from sleeping.</h2>
        </div>
      </div>
      <div className="footer-col">
        <div className="footer-summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          repellendus perferendis quisquam labore itaque, exercitationem veniam
          nisi autem omnis hic vel aliquid error saepe totam illo nobis enim
          incidunt nesciunt.
        </div>
        <div className="footer-details">
          <div className="sent-mail footer-details-col">
            <div className="footer-detail-heading">heading</div>
            <div className="mail">abc@xyz.com</div>
            <div className="mail">abc@xyz.com</div>
          </div>

          <div className="make-call footer-details-col">
            <div className="footer-detail-heading">heading</div>
            <div className="phone">+91 9876 890 345</div>
            <div className="phone">+91 9876 890 345</div>
          </div>

          <div className="get-in-touch footer-details-col">
            <div className="footer-detail-heading">heading</div>
            <div className="address">+91 9876 890 345</div>
            <div className="address">+91 9876 890 345</div>
          </div>
        </div>
      </div>

      <div className="support-text">Powered by RISH</div>
    </div>
  );
};

export default Footer;
