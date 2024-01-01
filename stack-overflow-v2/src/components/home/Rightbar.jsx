import React from "react";
import { Chrono } from "react-chrono";
import { IoLocationOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import {
  FaAngleRight,
  FaVoteYea,
  FaStackOverflow,
  FaTag,
} from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdScheduleSend } from "react-icons/md";
import { GiResize } from "react-icons/gi";
import "./rightbar.css";

const customContent = [
  <div className="job-card-container" key={0}>
    <h3 className="job-title">Front End Developer with Angular</h3>
    <p className="job-company-name">WalletHub</p>
    <div className="job-mode-container">
      <p className="job-location">
        <span>
          <IoLocationOutline />
        </span>{" "}
        Washington,DC
      </p>
      <p className="job-mode">
        <span>
          <TbWorld />
        </span>{" "}
        Remote
      </p>
    </div>
    <div className="skills-container">
      <span className="skills-tab">angular js</span>
      <span className="skills-tab">cordova</span>
    </div>
  </div>,
  <div className="job-card-container" key={1}>
    <h3 className="job-title">Senior iOS / iPhone Engineer</h3>
    <p className="job-company-name">Perk.com INC.</p>
    <div className="job-mode-container">
      <p className="job-location">
        <span>
          <IoLocationOutline />
        </span>{" "}
        Bengaluru, India
      </p>
      <p className="job-mode">
        <span>
          <HiOutlineBuildingOffice2 />
        </span>{" "}
        In Office
      </p>
    </div>
    <div className="skills-container">
      <span className="skills-tab">iOS</span>
      <span className="skills-tab">iPhone</span>
    </div>
  </div>,
  <div className="job-card-container" key={2}>
    <h3 className="job-title">Software Engineer</h3>
    <p className="job-company-name">SparkNET Technologies</p>
    <p className="salary-info">$25,000 - $40,000</p>
    <div className="job-mode-container">
      <p className="job-location">
        <span>
          <IoLocationOutline />
        </span>{" "}
        No Location
      </p>
      <p className="job-mode">
        <span>
          <TbWorld />
        </span>{" "}
        Remote
      </p>
    </div>
    <div className="skills-container">
      <span className="skills-tab">iOS</span>
      <span className="skills-tab">ruby in rails</span>
    </div>
  </div>,
];

const networkQnsArray = [
  {
    icon: <FaVoteYea />,
    qn: "Where there women who were against giving women the right to vote?",
  },
  {
    icon: <FaStackOverflow />,
    qn: "Why does everybody typedef over standard C tyeps?",
  },
  { icon: <FaTag />, qn: "An English word describing a pseudo-job" },
  {
    icon: <MdScheduleSend />,
    qn: "When flying on a very tight schedule, are you obligated to run to make it to the next gate on a connection?",
  },
  { icon: <GiResize />, qn: "Does 1 pixel have a standard size?" },
];

const Rightbar = () => {
  return (
    <div className="right-bar-main-container">
      <div className="jobs-header-container">
        <h1 className="jobs-head">Looking out for...</h1>
        <p className="background-text">jobs</p>
      </div>
      <div className="slider-container">
        <Chrono mode="VERTICAL">{customContent}</Chrono>
      </div>
      <button className="view-more-jobs-btn">
        VIEW ALL JOBS <FaAngleRight />
      </button>
      <div className="network-header-container">
        <h1 className="network-head">Network questions</h1>
        <p className="background-text">hot</p>
        <ul className="network-qns-container">
          {networkQnsArray.map((eachQn, index) => (
            <li key={index} className="network-qn-link">
              <div className="network-qn">
                <span className="qn-icon">{eachQn.icon}</span>{" "}
                <p>{eachQn.qn}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="view-more-jobs-btn network-btn">
          VIEW ALL JOBS <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
