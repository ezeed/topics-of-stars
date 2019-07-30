import React, { Fragment, useState, useEffect } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import TopicList from "../topics-list";
import TopicFilters from "../topics-filters";
import ReposList from "../repos-list";
import { getTopicsList, getTopicsByKeyword, getRepoByTopic } from "./utils";

export const GET_GITHUB_INFO = gql`
    query GET_GITHUB_INFO($login: String!, $first: Int){
      user(login: $login) {
      starredRepositories(first: $first) {
        totalCount,
        nodes {
          name,
          description,
          homepageUrl,
          url,
          languages(first:100) {
            nodes {
              name
            }
          },
          owner {
            url,
            login
          },
          repositoryTopics(first: $first) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const Topics = (props: any) => {

  const { topicListDataSource, reposDataSource } = props;

  const [topicFilterKeyword, updateTopicFilterKeyword] = useState();
  const [topicListData, updateTopicListData] = useState(topicListDataSource);

  const [selectedTopic, updateSelectedTopic] = useState();
  const [repos, updateRepos] = useState([]);

  useEffect(() => {
    const topicFiltered = getTopicsByKeyword(topicListDataSource, topicFilterKeyword);
    updateTopicListData(topicFiltered);
    console.log(topicListDataSource);
  }, [topicFilterKeyword, topicListDataSource])

  useEffect(() => {
    if (selectedTopic !== '') {
      updateRepos(getRepoByTopic(reposDataSource, selectedTopic));
    }
  }, [selectedTopic, reposDataSource])

  return (
    <Fragment>
      <TopicFilters
        topicFilterKeyword={topicFilterKeyword}
        updateTopicFilterKeyword={updateTopicFilterKeyword}
      />
      <TopicList topics={topicListData} handleSelectTopic={updateSelectedTopic} />
      <ReposList repos={repos} />
    </Fragment>
  );
}

export default () => (
  <Query variables={{ login: "ezeed", first: 100 }} query={GET_GITHUB_INFO}>
    {
      // TODO: Get the correct Type of the graphql response. <GraphqlQueryControls>
      (response: any) => {
        if (response.loading) return <progress className="progress is-small is-dark" max="100"></progress>
        if (response.error) return "Error" // TODO: Handle error properly
        return <Topics topicListDataSource={getTopicsList(response.data)} reposDataSource={response.data} />
      }
    }
  </Query>
)