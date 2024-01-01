import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="app-main-container">
      <div className="top-container">
        <Sidebar />
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
