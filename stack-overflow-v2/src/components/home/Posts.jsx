import React from "react";
import "./post.css";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <div className="post-main-container">
      <div className="top-questions-header-container">
        <div className="qns-header-container">
          <h1 className="qns-head">Questions</h1>
          <p className="background-text">top</p>
        </div>
        <ul className="header-nav-links-container">
          <li className="header-nav-links">interesting</li>
          <li className="header-nav-links">
            featured <span className="notify-count">432</span>
          </li>
          <li className="header-nav-links">hot</li>
          <li className="header-nav-links">week</li>
          <li className="header-nav-links">month</li>
        </ul>
        <PostCard />
        <div className="looking-more-container">
          <img
            alt="looking-more-img"
            src="lookingmore.png"
            className="looking-more-img"
          />
          <div className="looking-more-info-container">
            <h1 className="looking-head">Looking for more?</h1>
            <p className="looking-desc">
              Browse the
              <span className="highlight-desc">
                {" "}
                complete list of questions
              </span>
              , or <span className="highlight-desc">popular tags</span>. Help us
              answer unanswered questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
