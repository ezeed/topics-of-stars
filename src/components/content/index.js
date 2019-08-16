import React, { useContext } from "react";
import Topics from "../topics";
import { UserContext } from "../../context/user";

const Content = () => {
  const { username } = useContext(UserContext);
  return (
    <div className="section content-stick">
      <Topics username={username} />
    </div>
  );
};

export default Content;
