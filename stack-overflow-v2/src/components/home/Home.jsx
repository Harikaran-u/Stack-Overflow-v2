import React from "react";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Rightbar from "./Rightbar";
import "./home.css";

const Home = () => {
  return (
    <div className="home-main-container">
      <Navbar />
      <div className="display-info-container">
        <Posts />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
