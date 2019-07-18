// import logo from "./logo.svg";
// import "./App.css";
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

function App(props: any) {
  document.title = "Topic of Stars";
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
