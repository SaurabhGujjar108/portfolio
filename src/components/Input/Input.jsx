import React from "react";
import "./Input.scss";

const Input = ({ placeholder, type }) => {
  return (
    <div className={"input-container"}>
      <input className={"input"} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
