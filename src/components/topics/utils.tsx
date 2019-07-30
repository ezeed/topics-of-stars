interface IGithubUserInfo {
  user: {
    starredRepositories: {
      nodes: IGithubRepoInfo[]
    }
  }
}

interface IGithubRepoInfo {
  repositoryTopics: {
    nodes: IGithubTopicInfo[]
  }
}

interface IGithubTopicInfo {
  topic: {
    name: string
  }
}

export const getTopicsList = (githubInfo: IGithubUserInfo): string[] => {
  const starredRepos = githubInfo.user.starredRepositories.nodes;
  const topicListSource = new Set(
    starredRepos.flatMap((currentRepo: IGithubRepoInfo) => currentRepo.repositoryTopics.nodes.map((current: IGithubTopicInfo) => current.topic.name))
  );
  return Array.from(topicListSource);
}

export const getRepoByTopic = (githubInfo: any, topicToSerch: string) => {
  const starredRepos = githubInfo.user.starredRepositories.nodes;
  return starredRepos.filter((current: any) => current.repositoryTopics.nodes
    .flatMap((tag: any) => tag.topic.name).includes(topicToSerch));
}

export const getTopicsByKeyword = (topicListSource: string[], topicFilterKeyword: string): string[] => {
  if (topicFilterKeyword === undefined || topicFilterKeyword === "") {
    return topicListSource;
  }
  return topicListSource
    .filter((topic) => topic.includes(topicFilterKeyword))
}

