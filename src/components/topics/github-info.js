import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import Message from "../message";
import { getTopicsList } from "./utils";

const GET_GITHUB_INFO = loader("./githubInfo.graphql");

function GithubInfo({ login, first, render }) {
  const { loading, error, data } = useQuery(GET_GITHUB_INFO, {
    variables: { login, first }
  });

  if (loading)
    return <progress className="progress is-small is-dark" max="100" />;
  if (error)
    return (
      <Message
        message={error.message.replace("GraphQL error: ", "")}
        color="is-dark"
        size="is-large"
      />
    );

  return (
    <>
      {render({
        topicListDataSource: getTopicsList(data),
        reposDataSource: data,
        userData: {
          url: data.user.url,
          name: data.user.name,
          avatarUrl: data.user.avatarUrl,
          followers: data.user.followers.totalCount,
          following: data.user.following.totalCount,
          repositories: data.user.repositories.totalCount,
          starredRepositories: data.user.starredRepositories.totalCount
        }
      })}
    </>
  );
}

export default GithubInfo;
