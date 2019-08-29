import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "../user";

const TopicContext = createContext();

const TopicContextProvider = props => {
  const [selectedTopic, updateSelectedTopic] = useState("");
  const { username } = useContext(UserContext);

  useEffect(() => {
    updateSelectedTopic("");
  }, [username]);

  return (
    <TopicContext.Provider value={{ selectedTopic, updateSelectedTopic }}>
      {props.children}
    </TopicContext.Provider>
  );
};

export { TopicContext, TopicContextProvider };
