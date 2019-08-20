import React, { useContext } from "react";
import "./tag.css";
import { TopicContext } from "../../context/topic";

const Tag = ({ topic }) => {
  const { selectedTopic, updateSelectedTopic } = useContext(TopicContext);
  return (
    <div key={topic} className="control">
      <div className="tags has-addons">
        <span
          className={`tag is-medium ${
            selectedTopic === topic ? "is-primary color-is-black" : "is-dark"
          }`}
          onClick={() => updateSelectedTopic(topic)}
        >
          {topic}
        </span>
      </div>
    </div>
  );
};

export default Tag;
