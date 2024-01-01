import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { GrFormView } from "react-icons/gr";
import { formatDistanceToNow } from "date-fns";
import { MdEdit } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi2";
import "./post.css";

const apiUrl =
  "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow";

const PostCard = () => {
  const [postsArray, setPostsArray] = useState([]);

  const getPostData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPostsArray(data.items);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  const getFormattedTime = (timeStamp) => {
    const timeDifference = formatDistanceToNow(new Date(timeStamp * 1000), {
      addSuffix: true,
    });
    return timeDifference;
  };

  return (
    <div className="post-card-container">
      <ul className="all-posts-card">
        {postsArray.map((eachPost) => (
          <li key={eachPost.question_id} className="post-card">
            <div className="question-container">
              <h2 className="question-title">{eachPost.title}</h2>
              <ul className="tags-container">
                {eachPost.tags.map((eachTag, index) => (
                  <li key={index} className="tag-name">
                    {eachTag}
                  </li>
                ))}
              </ul>
              <div className="user-activity-container">
                <span className="user-activity-icon">
                  {eachPost.answer_count > 0 ? (
                    <HiOutlineDocumentText />
                  ) : (
                    <MdEdit />
                  )}
                </span>
                <h1 className="user-activity-head">
                  <span className="activity-time">
                    {eachPost.last_edit_date === undefined &&
                    eachPost.answer_count > 0
                      ? "answered "
                      : "modified "}
                    {eachPost.last_edit_date === undefined
                      ? getFormattedTime(eachPost.last_activity_date)
                      : getFormattedTime(eachPost.last_edit_date)}
                  </span>
                  {eachPost.owner.display_name}
                </h1>
              </div>
            </div>
            <div className="post-details-container">
              <div className="view-card">
                <p className="count">{eachPost.score}</p>
                <p className="view-name">votes</p>
                <AiOutlineLike className="view-icon" />
              </div>
              <div className="view-card">
                <p className="count">{eachPost.answer_count}</p>
                <p className="view-name">answers</p>
                <RiQuestionAnswerLine className="view-icon" />
              </div>
              <div className="view-card">
                <p className="count">{eachPost.view_count}</p>
                <p className="view-name">views</p>
                <GrFormView className="view-icon" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostCard;
