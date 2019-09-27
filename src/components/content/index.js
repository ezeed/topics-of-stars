import React, { useContext } from "react";
import Topics from "../topics";
import LandingComponent from "../landing";
import SearchUser from "../search-user";
import GithubInfo from "../topics/github-info";
import { UserContext } from "../../context/user";

const Content = () => {
  const { username } = useContext(UserContext);
  return (
    <div
      className={`section content-stick ${!username ? "background-image" : ""}`}
    >
      {username ? (
        <>
          <div className="level is-hidden-desktop">
            <SearchUser />
          </div>
          <GithubInfo
            login={username}
            first={100}
            render={result => <Topics {...result} />}
          />
        </>
      ) : (
        <LandingComponent />
      )}
    </div>
  );
};

export default Content;
