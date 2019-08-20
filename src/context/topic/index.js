import React, { createContext, useState } from "react";

const TopicContext = createContext();

const TopicContextProvider = props => {
  const [selectedTopic, updateSelectedTopic] = useState("");
  return (
    <TopicContext.Provider value={{ selectedTopic, updateSelectedTopic }}>
      {props.children}
    </TopicContext.Provider>
  );
};

export { TopicContext, TopicContextProvider };
