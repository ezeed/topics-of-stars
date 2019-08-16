import React, { Fragment, useState, useEffect } from "react";
import { Query } from "react-apollo";
import { loader } from "graphql.macro";

import TopicList from "../topics-list";
import TopicFilters from "../topics-filters";
import ReposList from "../repos-list";
import { getTopicsList, getTopicsByKeyword, getRepoByTopic } from "./utils";

const GET_GITHUB_INFO = loader("./githubInfo.graphql");

const Topics = ({ topicListDataSource, reposDataSource }) => {
  const [topicFilterKeyword, updateTopicFilterKeyword] = useState();
  const [topicListData, updateTopicListData] = useState(topicListDataSource);
  const [selectedTopic, updateSelectedTopic] = useState();
  const [repos, updateRepos] = useState([]);

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
    }
  }, [selectedTopic, reposDataSource]);

  return (
    <Fragment>
      <TopicFilters
        topicFilterKeyword={topicFilterKeyword}
        updateTopicFilterKeyword={updateTopicFilterKeyword}
      />
      <TopicList
        topics={topicListData}
        handleSelectTopic={updateSelectedTopic}
      />
      <ReposList repos={repos} />
    </Fragment>
  );
};

export default function TopicsWithQuery(props) {
  return (
    <Query
      variables={{ login: props.username, first: 100 }}
      query={GET_GITHUB_INFO}
    >
      {response => {
        if (response.loading)
          return <progress className="progress is-small is-dark" max="100" />;
        if (response.error) return "Error"; // TODO: Handle error properly
        return (
          <Topics
            topicListDataSource={getTopicsList(response.data)}
            reposDataSource={response.data}
          />
        );
      }}
    </Query>
  );
}
