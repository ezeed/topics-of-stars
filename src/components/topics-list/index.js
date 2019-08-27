import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import { TopicContext } from "../../context/topic";
import Tag from "../tag";

const TopicsList = ({ topics }) => {
  const { selectedTopic, updateSelectedTopic } = useContext(TopicContext);
  return (
    <div className="container is-fluid">
      <div className={`collapsible ${selectedTopic !== "" ? "collapsed" : ""}`}>
        <div className="field is-grouped is-grouped-multiline">
          {topics.map(currentTopic => (
            <Tag key={currentTopic} topic={currentTopic} />
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        {selectedTopic !== "" ? (
          <button
            onClick={() => updateSelectedTopic("")}
            className="button is-fullwidth is-rounded is-black is-inverted"
          >
            <FontAwesomeIcon icon={faSortDown} />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TopicsList;
