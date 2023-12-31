import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";

import "./App.css";

const App = () => {
  return (
    <div className="app-main-container">
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
