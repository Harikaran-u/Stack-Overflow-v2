import React from "react";
import { FaTwitter, FaFacebookF, FaRegCopyright } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "./footer.css";

const navLinkArray = [
  "about us",
  "tour",
  "help",
  "blog",
  "chat",
  "data",
  "legal",
  "privacy policy",
  "work here",
  "advertising info",
  "mobile",
  "contact us",
  "feedback",
];

const techArray = [
  "Stack Overflow",
  "Server Fault",
  "Super User",
  "Web Applications",
  "Ask Ubuntu",
  "Webmasters",
  "Game Development",
  "Tex-LaTex",
  "Programmers",
  "Unix & Linux",
  "Ask Different(Apple)",
  "Wordpress Development",
  "Geographic Information Systems",
  "Electrical Engineering",
  "Android Enthusiasts",
];

const lifeArtsArray = [
  "Photography",
  "Science Fiction & Fantacy",
  "Graphic Design",
  "Movies & TV",
  "Seasoned Advice(cooking)",
  "Home Improvement",
  "Personal Finance & Money",
];

const cultureArray = [
  "English Language & Usage",
  "Skeptics",
  "Mi Yodeya(Judaism)",
  "Travel",
  "Christianity",
  "Arqade(gaming)",
  "Bicycles",
];

const scienceArray = [
  "Mathematics",
  "Cross Validated(stats)",
  "Theoretical Computer Science",
  "Physics",
  "MathOverflow",
  "Chemistry",
  "Biology",
];

const othersArray = [
  "Stack Apps",
  "Meta Stack Exchange",
  "Area 51",
  "Stack Overflow careers",
];

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-link-top-container">
        <ul className="footer-nav-link-container">
          {navLinkArray.map((eachLink, index) => (
            <li key={index} className="footer-link">
              {eachLink}
            </li>
          ))}
        </ul>
        <div className="social-link-container">
          <button className="social-link-btn">
            <FaTwitter />
          </button>
          <button className="social-link-btn">
            <FaFacebookF />
          </button>
          <button className="social-link-btn">
            <TbWorld />
          </button>
        </div>
      </div>
      <div className="footer-topics-container">
        <div className="topic-container">
          <h1 className="topic-head">TECHNOLGY</h1>
          <ul className="topic-link-container">
            {techArray.map((eachLink, index) => (
              <li key={index} className="topic-link">
                {eachLink}
              </li>
            ))}
            <li className="topic-link-more">50 + more</li>
          </ul>
        </div>
        <div className="topic-container">
          <h1 className="topic-head">LIFE/ARTS</h1>
          <ul className="topic-link-container">
            {lifeArtsArray.map((eachLink, index) => (
              <li key={index} className="topic-link">
                {eachLink}
              </li>
            ))}
            <li className="topic-link-more">19 more</li>
          </ul>
        </div>
        <div className="topic-container">
          <h1 className="topic-head">CULTURE/RECREATION</h1>
          <ul className="topic-link-container">
            {cultureArray.map((eachLink, index) => (
              <li key={index} className="topic-link">
                {eachLink}
              </li>
            ))}
            <li className="topic-link-more">21 more</li>
          </ul>
        </div>
        <div className="topic-container">
          <h1 className="topic-head">SCIENCE</h1>
          <ul className="topic-link-container">
            {scienceArray.map((eachLink, index) => (
              <li key={index} className="topic-link">
                {eachLink}
              </li>
            ))}
            <li className="topic-link-more">5 more</li>
          </ul>
        </div>
        <div className="topic-container">
          <h1 className="topic-head">OTHER</h1>
          <ul className="topic-link-container">
            {othersArray.map((eachLink, index) => (
              <li key={index} className="topic-link">
                {eachLink}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="licence-info-container">
        <p className="licence-desc">
          site design / logo{" "}
          <span>
            <FaRegCopyright />
          </span>{" "}
          2016 Stack Exchange Inc; user contributions licensed under cc by-sa
          3.0 with attribution required
        </p>
        <p className="licence-desc">rev 2016.8.1.3852</p>
      </div>
    </div>
  );
};

export default Footer;
