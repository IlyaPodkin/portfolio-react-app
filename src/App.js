import React from "react";
import NavigationBar from "./components/NavigationBar";
import HelloContainer from "./components/HelloContainer";
import "./styles/main.css";

function App() {
  return (
    <div className="main">
      <NavigationBar />
      <HelloContainer />
    </div>
  );
}

export default App;
