import React from "react";
import "./App.css";
import SideBar from "./layout/SideBar";
import AppBody from "./layout/AppBody";

function App() {
  return (
    <div className="w-full h-full flex">
      <SideBar />
      <AppBody />
    </div>
  );
}

export default App;
