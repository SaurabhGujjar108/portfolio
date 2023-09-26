import React from "react";

const TextArea = () => {
  return (
    <div className={"textarea-container"} style={{ width: "100%" }}>
      <textarea
        className={"input"}
        name="text-area"
        id="text-area"
        rows="5"
        placeholder={"Message"}
        style={{
          width: "98.2%",
          fontSize: "20px",
          color: "gray",
          fontWeight: "520",
          outline: "none",
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "5px"
        }}
      ></textarea>
    </div>
  );
};

export default TextArea;
