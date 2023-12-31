import React from "react";
import "./sidebar.css";

const Tabs = (props) => {
  const { tabItem, tabId, selectedTabId, selectTabId } = props;
  const isSelected = tabId === selectedTabId;
  return (
    <li
      className={`${isSelected && "selected-tab-item"} tab-item`}
      onClick={() => selectTabId(tabId)}
    >
      <span className={`${isSelected && "selected-tab-icon"} tab-icon`}>
        {tabItem.icon}
      </span>
      <p className={`${isSelected && "selected-tab-name"} tab-name`}>
        {tabItem.name.toUpperCase()}
        <span className="sub-text">{tabItem.subtext}</span>
      </p>
    </li>
  );
};

export default Tabs;
