import React from "react";
import Img from "react-image";

// url
const UserInfoHeader = ({ userData }) => {
  const {
    url,
    name,
    avatarUrl,
    followers,
    following,
    repositories,
    starredRepositories
  } = userData;
  return (
    <div className="level">
      <div className="level-item has-text-centered is-hidden-desktop">
        <div>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Img
              loader={
                <button className="button is-text is-loading is-rounded">
                  Loading
                </button>
              }
              className="avatar"
              src={avatarUrl}
              alt={name}
              title={name}
              style={{ height: "12em", borderRadius: "6em" }}
            />
          </a>
        </div>
      </div>
      <div className="level-item has-text-centered is-hidden-touch">
        <div>
          <p className="heading">Repositories</p>
          <p className="title">{repositories}</p>
        </div>
      </div>
      <div className="level-item has-text-centered is-hidden-touch">
        <div>
          <p className="heading">Stars</p>
          <p className="title">{starredRepositories}</p>
        </div>
      </div>
      <div className="level-item has-text-centered is-hidden-touch">
        <div>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Img
              className="avatar"
              loader={
                <button className="button is-text is-loading is-rounded">
                  Loading
                </button>
              }
              src={avatarUrl}
              alt={name}
              title={name}
              style={{ height: "11em", borderRadius: "7em" }}
            />
          </a>
        </div>
      </div>
      <div className="level-item has-text-centered is-hidden-touch">
        <div>
          <p className="heading">Followers</p>
          <p className="title">{followers}</p>
        </div>
      </div>
      <div className="level-item has-text-centered is-hidden-touch">
        <div>
          <p className="heading">Following</p>
          <p className="title">{following}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoHeader;
