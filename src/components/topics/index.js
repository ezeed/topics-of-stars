import React, { Fragment, useState, useEffect, useContext } from "react";
import { Query } from "react-apollo";
import { loader } from "graphql.macro";

import TopicList from "../topics-list";
import TopicFilters from "../topics-filters";
import ReposList from "../repos-list";
import LandingComponent from "../landing";
import Message from "../message";
import { getTopicsList, getTopicsByKeyword, getRepoByTopic } from "./utils";
import { TopicContext } from "../../context/topic";

const GET_GITHUB_INFO = loader("./githubInfo.graphql");

const Topics = ({ topicListDataSource, reposDataSource }) => {
  const [topicFilterKeyword, updateTopicFilterKeyword] = useState();
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
    }
  }, [selectedTopic, reposDataSource]);

  return (
    <Fragment>
      <TopicFilters
        topicFilterKeyword={topicFilterKeyword}
        updateTopicFilterKeyword={updateTopicFilterKeyword}
      />
      <TopicList topics={topicListData} />
      <ReposList repos={repos} />
    </Fragment>
  );
};

export default function TopicsWithQuery(props) {
  return props.username ? (
    <Query
      variables={{ login: props.username, first: 100 }}
      query={GET_GITHUB_INFO}
    >
      {response => {
        if (response.loading)
          return <progress className="progress is-small is-dark" max="100" />;
        if (response.error) {
          /*TODO: Handle error message properly*/
          const normalizedError = response.error.message.replace(
            "GraphQL error: ",
            ""
          );
          return (
            <Message
              message={normalizedError}
              color="is-dark"
              size="is-large"
            />
          ); // TODO: Handle error properly
        }
        return (
          <Topics
            topicListDataSource={getTopicsList(response.data)}
            reposDataSource={response.data}
          />
        );
      }}
    </Query>
  ) : (
    <LandingComponent />
  );
}
