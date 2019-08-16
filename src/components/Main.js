import React, { Fragment } from "react";
import NavBar from "./navbar";
import Content from "./content";
import { UserContextProvider } from "../context/user";
import Footer from "./footer";

const Main = () => {
  return (
    <UserContextProvider>
      <Fragment>
        <NavBar />
        <Content />
        <Footer />
      </Fragment>
    </UserContextProvider>
  );
};

export default Main;
