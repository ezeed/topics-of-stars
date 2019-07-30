import React from "react";

export default function NavBar() {
  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://www.youtube.com/user/Pazos64">
          Topic of Stars
        </a>
      </div>
    </nav>
  );
}

/* TODO: Github Integration
<div className="navbar-menu">
  <div className="navbar-start" />
  <div className="navbar-end">
    <div className="navbar-item">
      <div className="buttons">
        <button className="button is-primary">
          <strong>Sign up with Github</strong>
        </button>
      </div>
    </div>
  </div>
</div>
*/
