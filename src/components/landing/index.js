import React from "react";
import SearchUser from "../search-user";

const LandingComponent = () => (
  <section className="landing-element">
    <div className="columns is-centered">
      <div className="column is-half is-offset-one-fifths">
        <h1>DUDE! Where is my repo?</h1>
        <h2>
          If you have a lot of starred repos in github and you're watching that
          CSS lib and don't remember the name, let's try search by topic (or
          tag)
        </h2>
      </div>
    </div>
    <div className="columns is-centered">
      <div className="column is-half is-offset-one-fifths">
        <SearchUser />
      </div>
    </div>
  </section>
);

export default LandingComponent;
