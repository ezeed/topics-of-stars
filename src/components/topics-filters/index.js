import React from "react";

const TopicFilters = props => {
  return (
    <div className="columns">
      <div className="column" />
      <div className="column is-three-fifths">
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Find Topic"
              value={props.topicFilterKeyword}
              onChange={e => props.updateTopicFilterKeyword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="column" />
    </div>
  );
};

export default TopicFilters;
