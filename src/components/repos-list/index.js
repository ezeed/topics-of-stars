import React from "react";

const ReposList = props => {
  return (
    <div className="columns">
      <div className="column is-full">
        {props.repos.map(repo => (
          <div key={repo.name} className="box">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <a
                    href={repo.url}
                    title={repo.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>{repo.name}</strong>
                  </a>
                  {repo.homepageUrl && (
                    <a
                      href={repo.homepageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      - {repo.homepageUrl}
                    </a>
                  )}
                  <br />
                  <p>{repo.description}</p>
                  <br />
                  <p>
                    <a
                      href={repo.owner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <small>@{repo.owner.login}</small>
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReposList;

/*
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
*/
