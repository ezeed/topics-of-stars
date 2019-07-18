
import React, { useMemo, Fragment, useState } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import TopicList from "../topics-list";
import TopicFilters from "../topics-filters";

export const GET_GITHUB_INFO = gql`
    query GET_GITHUB_INFO($login: String!, $first: Int){
      user(login: $login) {
      starredRepositories(first: $first) {
        totalCount,
        nodes {
          name,
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


const Topics = () => {

  const [userName, updateUserName] = useState("ezeed");
  const [topicFilterKeyword, updateTopicFilterKeyword] = useState("");

  return (
    <Fragment>
      <TopicFilters
        userName={userName}
        topicFilterKeyword={topicFilterKeyword}
        updateUserName={updateUserName}
        updateTopicFilterKeyword={updateTopicFilterKeyword}
      />
      <Query variables={{ login: userName, first: 100 }} query={GET_GITHUB_INFO}>
        {
          (response: any) => {
            if (response.loading) return <progress className="progress is-small is-dark" max="100"></progress>
            if (response.error) return "Error" // TODO: Handle error properly
            return <div className="container is-fluid">
              <TopicList topics={[]} />
            </div>
          }
        }
      </Query>
    </Fragment>
  );
}

export default Topics;

/*
function TopicsList({ githubInfo, topicFilterKeyword }: any) {
  const filteredTopicList = useMemo(() => {
    const starredRepos = githubInfo.user.starredRepositories.nodes || [];
    const topicListSource = new Set(
      starredRepos.flatMap((currentRepo: any) => currentRepo.repositoryTopics.nodes.map((current: any) => current.topic.name))
    );
    return Array.from(topicListSource)
      .filter((topic) => String(topic)
        .includes(topicFilterKeyword))
      .sort();
  }, [githubInfo, topicFilterKeyword])
  return (
    <>
      {(filteredTopicList) && <Tag data={filteredTopicList} handleSelectTopic={console.log} />}
    </>
  )
}
*/