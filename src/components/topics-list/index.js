import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

import { TopicContext } from "../../context/topic";
import Tag from "../tag";

const TopicsList = ({ topics }) => {
  const { selectedTopic, updateSelectedTopic } = useContext(TopicContext);
  const [showTopics, updateShowTopics] = useState(true);
  useEffect(() => {
    //hide if selectedTopic !== empty
    updateShowTopics(selectedTopic !== "");
  }, [selectedTopic]);
  return (
    <div className="container is-fluid">
      <div className={`collapsible ${showTopics ? "collapsed" : ""}`}>
        <div className="field is-grouped is-grouped-multiline">
          {topics.map(currentTopic => (
            <Tag key={currentTopic} topic={currentTopic} />
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        {showTopics ? (
          <button
            onClick={() => updateShowTopics(!showTopics)}
            className="button is-white is-large is-rounded is-fullwidth is-text"
          >
            <FontAwesomeIcon icon={faSortDown} />
          </button>
        ) : (
          <button
            onClick={() => updateShowTopics(!showTopics)}
            className="button is-white is-large is-rounded is-fullwidth is-text"
          >
            <FontAwesomeIcon icon={faSortUp} />
          </button>
        )}
      </div>
      {selectedTopic !== "" && (
        <div style={{ textAlign: "center" }}>
          <span className="tag is-primary color-is-black is-large">
            #{selectedTopic}
            <button
              style={{ backgroundColor: "black" }}
              onClick={() => updateSelectedTopic("")}
              className="delete"
            ></button>
          </span>
        </div>
      )}
    </div>
  );
};

export default TopicsList;
