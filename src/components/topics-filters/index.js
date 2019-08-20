import React from "react";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopicFilters = props => {
  return (
    <div className="columns">
      <div className="column" />
      <div className="column is-three-fifths">
        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input is-black is-large"
              type="text"
              placeholder="Find Topic"
              value={props.topicFilterKeyword}
              onChange={e => props.updateTopicFilterKeyword(e.target.value)}
            />
            <span className="icon is-medium is-left">
              <FontAwesomeIcon icon={faTags} />
            </span>
          </div>
        </div>
      </div>
      <div className="column" />
    </div>
  );
};

export default TopicFilters;
