export const getTopicsList = githubInfo => {
  const starredRepos = githubInfo.user.starredRepositories.nodes;
  const topicListSource = new Set(
    starredRepos.flatMap(currentRepo =>
      currentRepo.repositoryTopics.nodes.map(current => current.topic.name)
    )
  );
  return Array.from(topicListSource);
};

export const getRepoByTopic = (githubInfo, topicToSerch) => {
  const starredRepos = githubInfo.user.starredRepositories.nodes;
  return starredRepos.filter(current =>
    current.repositoryTopics.nodes
      .flatMap(tag => tag.topic.name)
      .includes(topicToSerch)
  );
};

export const getTopicsByKeyword = (topicListSource, topicFilterKeyword) => {
  if (topicFilterKeyword === undefined || topicFilterKeyword === "") {
    return topicListSource;
  }
  return topicListSource.filter(topic => topic.includes(topicFilterKeyword));
};
