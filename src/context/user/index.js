import React, { createContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider(props) {
  const [username, updateUsername] = useState("");
  return (
    <UserContext.Provider value={{ username, updateUsername }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
