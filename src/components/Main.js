import React, { Fragment } from "react";
import NavBar from "./navbar";
import Content from "./content";
import { UserContextProvider } from "../context/user";
import { TopicContextProvider } from "../context/topic";
import Footer from "./footer";

const Main = () => {
  return (
    <UserContextProvider>
      <Fragment>
        <NavBar />
        <TopicContextProvider>
          <Content />
        </TopicContextProvider>
        <Footer />
      </Fragment>
    </UserContextProvider>
  );
};

export default Main;
