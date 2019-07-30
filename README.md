# Topics of Stars

## Component Diagram

```mermaid
classDiagram
Main --> NavBar
Main --> Content
Main --> Footer
Content --> Topics
Topics --> TopicsFilters
TopicsFilters : string topicFilterKeyword
TopicsFilters : string userName
TopicsFilters : updateTopicFilterKeyword()
TopicsFilters : updateUsername()
Topics --> TopicList
TopicList : string[] topics
TopicList --> Tag
Tag: string topic
Tag: handleSelectTopic()
```
