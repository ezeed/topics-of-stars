import React from "react";

import Tag from "../tag";

function TopicsList(props: any) {
  return (
    <div className="field is-grouped is-grouped-multiline">
      {props.topics.map((currentTopic: string) => <Tag topic={currentTopic} handleSelectTopic={console.log} />)}
    </div>
  )
}

export default TopicsList;