import React from "react";
import "./../styles/hello-container.css";

const HelloContainer = () => {
  return (
    <div className="hello-content-container">
      <div className="hello-container">
        <span className="hello">Привет!</span>
        <span className="time-to-meet">Настало время знакомства</span>
      </div>
    </div>
  );
};

export default HelloContainer;
