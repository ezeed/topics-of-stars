import React, { Fragment, useState, useEffect, useContext } from "react";

import TopicList from "../topics-list";
import TopicFilters from "../topics-filters";
import ReposList from "../repos-list";
import UserInfoHeader from "../user-info-header";
import { getTopicsByKeyword, getRepoByTopic } from "./utils";
import { TopicContext } from "../../context/topic";

const Topics = ({ topicListDataSource, reposDataSource, userData }) => {
  // Default empty string prevent:
  // Warning: A component is changing an uncontrolled input of type text to be controlled.
  const [topicFilterKeyword, updateTopicFilterKeyword] = useState("");

  const [topicListData, updateTopicListData] = useState(topicListDataSource);
  const [repos, updateRepos] = useState([]);
  const { selectedTopic } = useContext(TopicContext);

  useEffect(() => {
    const topicFiltered = getTopicsByKeyword(
      topicListDataSource,
      topicFilterKeyword
    );
    updateTopicListData(topicFiltered);
  }, [topicFilterKeyword, topicListDataSource]);

  useEffect(() => {
    if (selectedTopic !== "") {
      updateRepos(getRepoByTopic(reposDataSource, selectedTopic));
    } else {
      updateRepos([]);
    }
  }, [selectedTopic, reposDataSource]);

  return (
    <Fragment>
      <UserInfoHeader userData={userData} />
      {userData.starredRepositories > 0 && (
        <TopicFilters
          topicFilterKeyword={topicFilterKeyword}
          updateTopicFilterKeyword={updateTopicFilterKeyword}
        />
      )}
      <TopicList topics={topicListData} />
      <ReposList repos={repos} />
    </Fragment>
  );
};

export default Topics;