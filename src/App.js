import "bulma";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Main from "./components/Main";
const { REACT_APP_GITHUB_TOKEN } = process.env;
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${REACT_APP_GITHUB_TOKEN}`
  }
});

function App() {
  document.title = "Topic of Stars";
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
