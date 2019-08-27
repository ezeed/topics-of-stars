import React, { useContext } from "react";
import Topics from "../topics";
import { UserContext } from "../../context/user";
import SearchUser from "../search-user";

const Content = () => {
  const { username } = useContext(UserContext);
  return (
    <div className="section content-stick">
      {username && (
        <div className="level is-hidden-desktop">
          <SearchUser />
        </div>
      )}
      <Topics username={username} />
    </div>
  );
};

export default Content;
