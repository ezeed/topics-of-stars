import React from "react";

interface TopicFiltersProps {
  userName: string,
  topicFilterKeyword: string,
  updateUserName: void,
  updateTopicFilterKeyword: void
}

const TopicFilters = (props: any) => {
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-three-fifths">
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Find Topic"
              value={props.topicFilterKeyword}
              onChange={(e) => props.updateTopicFilterKeyword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="column"></div>
    </div>
  )
}

export default TopicFilters;

/*
<div className="field has-addons">
  <div className="control">
    <input
      className="input"
      type="text"
      placeholder="Username"
      value={localUser}
      onChange={(event) => updateLocalUser(event.target.value)}
    />
  </div>
  <div className="control">
    <button onClick={() => props.updateUserName(localUser)} className="button is-dark">Search</button>
  </div>
</div>

*/