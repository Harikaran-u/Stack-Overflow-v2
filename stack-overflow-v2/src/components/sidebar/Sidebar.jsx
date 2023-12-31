import React, { useState } from "react";
import Tabs from "./Tabs";
import { MdQuestionMark } from "react-icons/md";
import { TbBriefcase2, TbBadge } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { HiSpeakerphone, HiChevronLeft } from "react-icons/hi";
import { LiaStackExchange } from "react-icons/lia";
import { BsFillInboxFill } from "react-icons/bs";
import "./sidebar.css";

const tabsArray = [
  { name: "Questions", icon: <MdQuestionMark />, subtext: "" },
  { name: "Jobs", icon: <TbBriefcase2 />, subtext: "" },
  { name: "Documentation", icon: <IoDocumentTextOutline />, subtext: "NEW" },
  { name: "Tags", icon: <BiPurchaseTagAlt />, subtext: "" },
  { name: "Users", icon: <HiOutlineUser />, subtext: "" },
  { name: "Badges", icon: <TbBadge />, subtext: "" },
  { name: "Ask Question", icon: <HiSpeakerphone />, subtext: "" },
  { name: "Stack Exchange", icon: <LiaStackExchange />, subtext: "" },
  { name: "Inbox", icon: <BsFillInboxFill />, subtext: "24" },
];

const Sidebar = () => {
  const [selectedTabId, setSelectedTabId] = useState(0);
  const selectTabId = (id) => {
    setSelectedTabId(id);
  };
  return (
    <div className="sidebar-main-container">
      <img src="stacklogo.png" alt="stack-overflow-logo" className="app-logo" />
      <button type="button" className="side-bar-toggle-btn">
        <HiChevronLeft />
      </button>
      <ul className="all-tabs-container">
        {tabsArray.map((eachItem, index) => (
          <Tabs
            tabItem={eachItem}
            key={index}
            selectedTabId={selectedTabId}
            tabId={index}
            selectTabId={selectTabId}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
