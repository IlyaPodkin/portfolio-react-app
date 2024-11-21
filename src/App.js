import React from "react";
import NavigationBar from "./components/NavigationBar";
import HelloContainer from "./components/HelloContainer";
import AboutMyself from "./components/AboutMyself";
import PlacesOfWork from "./components/PlacesOfWork";
import ModalPage from "./components/ModalPage";
import Education from "./components/Education";
import "./styles/main.css";

function App() {
  return (
    <div className="main">
      <NavigationBar />
      <HelloContainer />
      <AboutMyself />
      <PlacesOfWork/>
      <ModalPage />
      <Education/>
    </div>
  );
}

export default App;
