import React, { FunctionComponent, SetStateAction } from "react";
import "./tag.css";

interface ITopic {
  topic: string
  handleSelectTopic: SetStateAction<any>
}

const Tag: FunctionComponent<ITopic> = (props) => {

  const selectTopicEvent = () => props.handleSelectTopic(props.topic)

  return (
    <div key={props.topic} className="control">
    <div className="tags has-addons">
      <span className="tag is-dark" onClick={selectTopicEvent}>{props.topic}</span>
    </div>
  </div>
)
}

export default Tag;