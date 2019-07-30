import React, { FunctionComponent, SetStateAction } from "react";

import Tag from "../tag";

interface ITopics {
  topics: string[],
  handleSelectTopic: SetStateAction<any>
}

const TopicsList: FunctionComponent<ITopics> = ({ topics, handleSelectTopic }) => (
  <div className="container is-fluid">
    <div className="field is-grouped is-grouped-multiline">
      {topics.map((currentTopic: string) => <Tag key={currentTopic} topic={currentTopic} handleSelectTopic={handleSelectTopic} />)}
    </div>
  </div>
)



export default TopicsList;