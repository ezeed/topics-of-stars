import React from "react";

interface TopicFiltersProps {
  userName: string,
  topicFilterKeyword: string,
  updateUserName: void,
  updateTopicFilterKeyword: void
}

const TopicFilters = (props: any) => (
  <>
    <input
      className="input"
      type="text"
      placeholder="Username"
      value={props.userName}
      onChange={(e) => props.updateUserName(e.target.value)}
    />
    <input
      className="input"
      type="text"
      placeholder="Find Topic"
      value={props.topicFilterKeyword}
      onChange={(e) => props.updateTopicFilterKeyword(e.target.value)}
    />
  </>
)

export default TopicFilters;