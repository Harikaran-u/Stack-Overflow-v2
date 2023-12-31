import React from "react";
import { BiMenu, BiSearch } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-main-container">
      <div className="menu-search-container">
        <button type="button" className="custom-btn">
          <BiMenu />
        </button>
        <div className="search-box">
          <button type="button" className="custom-btn">
            <BiSearch />
          </button>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="profile-container">
        <button className="menu-text-btn">
          <span className="menu-icon">
            <TbWorld />
          </span>
          Help
        </button>
        <button className="menu-text-btn">
          <span className="menu-icon">
            <MdOutlineDesktopWindows />
          </span>
          Tour
        </button>
        <div className="profile-menu-container">
          <img
            src="profilepic.jpg"
            alt="user-profile"
            className="user-profile-logo"
          />
          <button className="menu-down-btn">
            <FaChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
