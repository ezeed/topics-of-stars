import React from "react";
import SearchUser from "../search-user";

const LandingComponent = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">Find your Fav repos by Topic</h1>
        <h2 className="subtitle">Search by GitHub User</h2>
        <br />
      </div>
      <div className="columns">
        <div className="column" />
        <div className="column is-one-quarter">
          <SearchUser />
        </div>
        <div className="column" />
      </div>
    </div>
  </section>
);

export default LandingComponent;
