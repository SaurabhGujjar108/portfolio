import React, { useState, useEffect } from "react";
import "./CircularProgress.scss";

const CircularProgress = ({ label, value = 100 }) => {
  const [initial, setInitial] = useState(0);
  const progress = () => {
    setInitial((prev) => prev + 1);
  };

  useEffect(() => {
    if (initial !== value) {
      const timeout = setTimeout(() => {
        progress();
      }, [5]);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [initial]);

  return (
    <div className={"circularProgress container"}>
      <div
        className="circular-progress"
        style={{
          background: `conic-gradient(#208b3a 0 ${initial}%, #fff 0 54%)`,
        }}
      >
        <div className="value-container">
          <div>
            {`${initial}`}
            <small>%</small>
          </div>
          <small>{label}</small>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
