import React from "react";
import NavigationBar from "./components/NavigationBar";
import HelloContainer from "./components/HelloContainer";
import AboutMyself from "./components/AboutMyself";
import "./styles/main.css";

function App() {
  return (
    <div className="main">
      <NavigationBar />
      <HelloContainer />
      <AboutMyself />
    </div>
  );
}

export default App;
