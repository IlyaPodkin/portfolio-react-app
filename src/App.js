import React from "react";
import NavigationBar from "./components/NavigationBar";
import HelloContainer from "./components/HelloContainer";
import AboutMyself from "./components/AboutMyself";
import PlacesOfWork from "./components/PlacesOfWork";
import ModalPage from "./components/ModalPage";
import Education from "./components/Education";
import Skills from "./components/Skills";
import "./styles/main.css";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="main">
      <NavigationBar />
      <HelloContainer />
      <AboutMyself />
      <PlacesOfWork/>
      <ModalPage />
      <Skills/>
      <Education/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
