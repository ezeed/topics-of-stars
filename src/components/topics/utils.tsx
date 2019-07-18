
function TopicsList({ githubInfo, topicFilterKeyword }: any) {
  const filteredTopicList = useMemo(() => {
    const starredRepos = githubInfo.user.starredRepositories.nodes;
    const topicListSource = new Set(
      starredRepos.flatMap((currentRepo: any) => currentRepo.repositoryTopics.nodes.map((current: any) => current.topic.name))
    );
    return 
  }, [githubInfo, topicFilterKeyword]) 
}

const getTopicsByKeyword = (topicListSourc: Array<any>) => {
  topicListSource
    .filter((topic) => String(topic)
    .includes(topicFilterKeyword))
    .sort(); 
}