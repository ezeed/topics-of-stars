import React from "react";

import Tag from "../tag";

const TopicsList = ({ topics, handleSelectTopic }) => (
  <div className="container is-fluid">
    <div className="field is-grouped is-grouped-multiline">
      {topics.map(currentTopic => (
        <Tag
          key={currentTopic}
          topic={currentTopic}
          handleSelectTopic={handleSelectTopic}
        />
      ))}
    </div>
  </div>
);

export default TopicsList;
